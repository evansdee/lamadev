"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState,formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("svaed to db");
  } catch (err) {
    throw new Error("something went wrong");
  }
};
export const addUser = async (prevState,formData) => {
  const { username,email,password,img } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newUser = new User({
      username,email,password,img
    });
    await newUser.save();
    revalidatePath("/admin");
    console.log("svaed to db");
  } catch (err) {
    throw new Error("something went wrong");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");

    console.log("deleted from db");
  } catch (err) {
    throw new Error("something went wrong");
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({userId:id})
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
    console.log("deleted from db");
  } catch (err) {
    throw new Error("something went wrong");
  }
};

export async function handleGithubSignin(e) {
  await signIn("github");
}
export async function handleLogout(e) {
  await signOut();
}

export async function register(prevState, formData) {
  const { username, email, password, confirmPassword } =
    Object.fromEntries(formData);
  // console.log(formData);

  if (password !== confirmPassword)
    return { status: "error", message: "Passdoesnt match" };

  try {
    connectToDb();

    const user = await User.findOne({ username });
    // console.log(user,'user');
    if (user) {
      return { status: "error", message: "User already exist" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { status: "success", message: "successfully" };
  } catch (error) {
    return { status: "error", message: "something went wrong" };
  }
}


export async function login(prevState, formData) {
  const { username, password } = Object.fromEntries(formData);
  // console.log(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    // console.log(error);
if(err.message.includes("CredentialsSignin")){
  return { status: "error", message: "invalid cred" };

}
    return { status: "error", message: "something went wrong" };
    // throw err
  }
}
