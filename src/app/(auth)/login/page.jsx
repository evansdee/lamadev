import LoginForm from "@/components/auth/login";
import { handleGithubSignin } from "@/libs/action";
import sty from "@/app/(auth)/register/register.module.css";


export default function Login() {

  return (
    <>
      <div className={sty.container}>
      <div className={sty.wrapper}>
        <form action={handleGithubSignin}>
          <button className={sty.github}>Login with github</button>
        </form>
        <LoginForm/>
      </div>
      </div>
    </>
  );
}
