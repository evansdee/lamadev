import Link from "next/link";
import sty from "./PostCard.module.css";
import Image from "next/image";

export default function PostCard({post}) {

  const {slug,title,desc,img} = post
  return (
    <div className={sty.container}>
      <div className={sty.top}>
        <div className={sty.imgContainer}>
          <Image
            src={img ? img : process.env.defaultImg}
            alt=""
            fill
            className={sty.img}
          />
        </div>
        <span>01.01.2024</span>
      </div>

      <div className={sty.bottom}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Link href={`/blog/${slug}`}>Read More...</Link>
      </div>
    </div>
  );
}
