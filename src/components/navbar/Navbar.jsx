import sty from "./navbar.module.css";
import Link from "next/link";
import Links from "./Link";
import { auth } from "@/libs/auth";

export default async function NavBar() {
  const session = await auth();
  // const session = true;

  // console.log(session?.user,"navbar");
  return (
    <>
      <div className={sty.container}>
        <Link href="/" className={sty.logo}>
          Logo
        </Link>

        <Links session={session} />
      </div>
    </>
  );
}
