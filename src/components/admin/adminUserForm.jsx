"use client";
import { useActionState } from "react";
import sty from "./adminPost.module.css";
import { addUser } from "@/libs/action";

export default function AdminUserForm() {
  const [state, formAction] = useActionState(addUser, undefined);
  return (
    <form action={formAction} className={sty.containerUserForm}>
      <h1>Add new User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <select name="isAdmin" id="">
        <option value="false">--Select User Type--</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}
