"use client";
import { usePathname } from "next/navigation";
import sty from "./navbar.module.css";
import CustomLink from "./CustomLink";
import Image from "next/image";
import { useState } from "react";
import { handleLogout } from "@/libs/action";

export default function Links({ session }) {
  const isAdmin = session?.user?.isAdmin;

  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
    // {
    //   title: "admin",
    //   path: "/admin",
    // },
    // {
    //   title: "login",
    //   path: "/login",
    // },
  ];

  return (
    <>
    <Image
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          className={sty.menu}
          onClick={() => setOpen((ele) => !ele)}
        />
      <ul>
        {links.map((ele) => (
          <CustomLink key={ele.title} pathName={pathName} item={ele} />
        ))}
        {session?.user ? (
          <>
            {isAdmin && (
              <CustomLink
                item={{ path: "/admin", title: "admin" }}
                pathName={pathName}
              />
            )}
            <form action={handleLogout} className={sty.form}>
              <button className={sty.logout}>logout</button>
            </form>
          </>
        ) : (
          <CustomLink item={{ path: "/login", title: "login" }} pathName={pathName}/>
        )}
      </ul>
      {open && (
        <div className={sty.menuContainer}>
          {links.map((ele) => (
            <CustomLink key={ele.title} pathName={pathName} item={ele} />
          ))}
        </div>
      )}
    </>
  );
}
