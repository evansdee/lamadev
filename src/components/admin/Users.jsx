'use client'
import { useDeleteUser, useUsers } from "./usePost"
import sty from "./adminPost.module.css";
import { deleteUser } from "@/libs/action";
import Image from "next/image";
import { useForm } from "react-hook-form";


export default function Users() {

    const {users} = useUsers()
    const {mutate,isPending} = useDeleteUser()

    const {register,handleSubmit} = useForm()
    // console.dir(users)
//   console.log(users[0]._id,typeof(users[0]._id));

function handleUser(data){
    console.log(data,"form")
    mutate({ id: data.id }); 
}

  return (
    <>
           {users?.map((user) => (
        <div className={sty.user} key={user._id}>
          <div className={sty.details}>
            <Image
              src={user.img || "/noavatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <span>{user?.username}</span>
          </div>

          <form onSubmit={handleSubmit(handleUser)}>
            <input type="hidden" {...register("id")} defaultValue={user?._id} />
            {/* <input type="hidden" name="id" value={user._id} /> */}
            <button>{isPending ? "Deleteing" :"Delete User"}</button>
          </form>
        </div>
      ))}
    </>
  );
}
