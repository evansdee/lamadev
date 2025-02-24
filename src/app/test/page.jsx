// "use client";

import { addPost, deletePost } from "@/libs/action";

export default function TestPage() {

  return (
    <div>
      {/* <form action={addPost}> */}
      <form action={deletePost}>
        {/* <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Desc" name="desc"/>
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        */
      }
        <input type="text" name="id" />
      <button>click</button> 
      </form>
    </div>
  );
}
