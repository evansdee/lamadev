import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./connectToDB";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config"

import bcrypt from "bcrypt";


const login = async({username,password})=>{
  try {
    connectToDb()
  
    const user = await User.findOne({username})

    if(!user) throw new Error("wrong credentials")
      
      const isPassCorrect = await bcrypt.compare(password,user.password)
    if(!isPassCorrect) throw new Error("wrong credentials")

      return user
  } catch (error) {
    throw new Error(err)
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {

        try {
          const user = await login(credentials)
          // console.log(credentials,"cred")
          return user
        } catch (error) {
          return null
        }
       
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(profile);

      if (account.provider === "github") {
        connectToDb();

        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks
  },
  ...authConfig.callbacks
});
