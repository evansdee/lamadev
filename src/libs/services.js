import { connectToDb } from "./connectToDB";
import { Post, User } from "./models";

export async function getPosts() {
    
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    throw new Error(`failed to fetch posts ${err}`);
  }
}

export async function getPost(slug) {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    throw new Error("failed to fetch posts");
  }
}
export async function getUser(id) {
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error("failed to fetch user no api");
  }
}
export async function getUsers() {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error(`failed to fetch users ${err}`);
  }
}
