"use client";
import { useActionState } from "react";
import sty from "./adminPost.module.css";
import { addPost } from "@/libs/action";

export default function AdminPostForm({userId}) {
  const [state, formAction] = useActionState(addPost, undefined);
  return (
    <form action={formAction} className={sty.containerPostForm}>
      <h1>Add new Post</h1>
      <input type="text" name="title" placeholder="Title" />
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="img" placeholder="Image URL" />
      <input type="text" name="slug" placeholder="slug" />
      <textarea
        type="text"
        name="desc"
        placeholder="Content"
        rows={10}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
}
