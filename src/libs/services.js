import { connectToDb } from "./connectToDB";
import { Post, User } from "./models";

// export async function getPosts() {
    
//   try {
//     await connectToDb();
//     const posts = await Post.find();
//     return posts;
//   } catch (err) {
//     throw new Error(`failed to fetch posts ${err}`);
//   }
// }

export async function getPosts() {
  try {
    await connectToDb();
    const posts = await Post.find().lean(); // Use .lean() to get plain objects
    // Manually convert _id and userId to strings if necessary:
    return posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
      userId: post.userId ? post.userId.toString() : null,
    }));
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
// export async function getUsers() {
//   try {
//     await connectToDb();
//     const users = await User.find();
//     return users;
//   } catch (err) {
//     throw new Error(`failed to fetch users ${err}`);
//   }
// }

export async function getUsers() {
  try {
    await connectToDb();
    const users = await User.find().lean(); // Convert to plain objects
    return users.map(user => ({
      ...user,
      _id: user._id.toString() // Convert _id to a string
    }));
  } catch (err) {
    console.error("Failed to fetch users:", err);
    throw new Error(`Failed to fetch users: ${err.message}`);
  }
}

