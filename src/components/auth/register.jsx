"use client";

import sty from "@/app/(auth)/register/register.module.css";
import { register } from "@/libs/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useActionState } from "react";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [state, formState] = useActionState(register, undefined);

  const router = useRouter();


useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
      router.push("/login");
    } else if (state?.status === "error") {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <>
      <form action={formState} className={sty.form}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="COnfirm Password"
        />

        <button>Register</button>
       <Link href={"/login"}>Have an account? <b>Login</b></Link>
      </form>
    </>
  );
}
