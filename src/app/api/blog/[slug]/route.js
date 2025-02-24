import { connectToDb } from "@/libs/connectToDB";
import { Post } from "@/libs/models";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {

    const {slug} = params 
  try {
    connectToDb();

    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (error) {
    throw new Error("error ish");
  }
}
