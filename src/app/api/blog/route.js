import { connectToDb } from "@/libs/connectToDB";
import { Post } from "@/libs/models";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("error ish");
  }
}
