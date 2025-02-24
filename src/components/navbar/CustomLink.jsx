"use client";

import Link from "next/link";

const show = {
  backgroundColor: "#fff",
  transition: "background-color 0.7s ease",
  color: "#28282b",
  borderRadius: "50px",
};

export default function CustomLink({ item, pathName }) {
  const { title, path } = item;
  // console.log(pathName)

  const active = pathName === path ? show : {};
  return (
    <li style={active}>
      <Link href={path}>{title}</Link>
    </li>
  );
}
