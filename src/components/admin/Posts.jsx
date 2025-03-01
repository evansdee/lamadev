"use client"
import { usePosts } from "./usePost";
import sty from "./adminPost.module.css";
import Image from "next/image";


export default function Posts() {

    const {posts,isLoading} = usePosts()

    if(isLoading) return <p>loading posts</p>
    console.log(posts);
    
  return (
    <>
         {posts?.map((post) => (
        <div className={sty.post} key={post.id} >
          <div className={sty.details}>
            <Image
              src={post.img || "/noavatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <span>{post?.title}</span>
          </div>

          {/* <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button>Delete Post</button>
          </form> */}
        </div>
      ))}
    </>
  );
}
