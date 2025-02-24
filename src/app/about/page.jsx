import Image from "next/image";

import sty from "./about.module.css"

export default function AboutPage() {
  return (
    <>
      <div className={sty.container}>
        <div className={sty.content}>
          <h4>About Agency</h4>
          <h1>
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus fugit quae sint, non optio neque nulla? Perspiciatis
            aliquam, ipsa odio, sed facilis dolorum blanditiis maiores modi
            ipsum, cupiditate nemo.
          </p>
          <div className={sty.boxes}>
          {Array.from({ length: 3 }, (_, i) => i + 1).map((ele) => (
            <div className={sty.box}>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          ))}
        </div>
        </div>
        <div className={sty.img}>
          <Image src="/about.png" alt="" width={400} height={400} />
        </div>
        
      </div>
    </>
  );
}
