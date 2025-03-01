'use client'
import { useUsers } from "./usePost"
import sty from "./adminPost.module.css";
import { deleteUser } from "@/libs/action";
import Image from "next/image";


export default function Users() {

    const {users} = useUsers()
  return (
    <>
           {users?.map((user) => (
        <div className={sty.user} key={user.id}>
          <div className={sty.details}>
            <Image
              src={user.img || "/noavatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <span>{user?.username}</span>
          </div>

          {/* <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button>Delete User</button>
          </form> */}
        </div>
      ))}
    </>
  );
}
