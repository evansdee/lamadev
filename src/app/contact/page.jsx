import Image from "next/image";
import sty from "./contact.module.css";

export default function ContactPage({ searchParams }) {
  console.log(searchParams);

  return (
    <>
      <div className={sty.container}>
        <div className={sty.imgContainer}>
          <Image src="/contact.png" alt="" fill />
        </div>
        <div className={sty.formContainer}>
          <form action="">
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number(optional)" />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <button>send</button>
          </form>
        </div>
      </div>
    </>
  );
}
