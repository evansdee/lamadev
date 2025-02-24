"use client";

import sty from "@/app/(auth)/register/register.module.css";
import { login } from "@/libs/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useActionState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [state, formState] = useActionState(login, undefined);

  const router = useRouter();


useEffect(() => {
    if (state?.status === "success") {
      console.log(state);
      
      toast.success(state.message);
      // router.push("/login");
    } else if (state?.status === "error") {
      console.log(state);
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <>
      <form action={formState} className={sty.form}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="password" name="password" placeholder="Enter Password" />
        

        <button>Login</button>
       <Link href={"/register"}>Dont have an account? <b>Register</b></Link>

       {
        state?.status === "error" && <p>{state?.message}</p>
       }
      </form>
    </>
  );
}
