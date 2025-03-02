import Image from "next/image";
import sty from "./singlePost.module.css";
import { getPost, getUser } from "@/libs/services";



// THIS IS USED FOR SEO OPTIMIZATION. MAKING DYNAMIC CHANGES TO THE META DATA BASE ON PAGE INFORMATION
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

// FETCH DATA WITH API
const getApiPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) throw new Error("nigga aint working");

  return res.json();
};

export default async function SinglePostPage({ params }) {
  const { slug } = await params;
  const post = await getApiPost(slug)
// console.log(post);
  // FETCH DATA WITHOUT API USING SERVER ACTION 
  // const post = await getPost(slug);

  const { title, desc, userId, img } = post;
  const { username, email, img: avatar } = await getUser(userId);
    // console.log(username);

  return (
    <div className={sty.container}>
      <div className={sty.imgContainer}>
        <Image src={img ? img : process.env.defaultImg} alt="" fill />
      </div>

      <div className={sty.textContainer}>
        <h1>{title}</h1>
        <div className={sty.detail}>
          <Image
            src={avatar ? avatar : "/noavatar.png"}
            alt=""
            width={50}
            height={50}
          />

          <div className={sty.detailText}>
            <span>Author</span>
            <span>{username}</span>
          </div>
          <div className={sty.detailText}>
            <span>Published</span>
            <span>John Cena</span>
          </div>
        </div>
        <div className={sty.desc}>{desc}</div>
      </div>
    </div>
  );
}
