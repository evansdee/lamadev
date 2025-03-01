import { getPosts } from "@/libs/services";
import sty from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/libs/action";

export default async function AdminPost() {
  const posts = await getPosts();

  return (
    <div className={sty.container}>
      <h1>Posts</h1>
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

          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button>Delete Post</button>
          </form>
        </div>
      ))}
    </div>
  );
}
