import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>
            Creative
            <br /> Thoughts
            <br /> Agency
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Repellendus deserunt ea quas sapiente voluptate velit laboriosam?
            Delectus illum magni ea.
          </p>

          <div className={styles.btns}>
            <Link href="/about">Learn More</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill/>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.gif" width={400} alt="hero gif" height={400}/>
        </div>
      </div>
    </>
  );
}
