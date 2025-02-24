import RegisterForm from "@/components/auth/register";
import sty from "./register.module.css";



// FOR TEST PURPOSES 
// const registerUser = async (data) => {
//   const res = await fetch("http://localhost:3000/api/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });
//   if (!res.ok) throw new Error("reg not workking");

//   return res.json();
// };

export default function RegisterPage() {
  // const { register, handleSubmit } = useForm();

  // function handleWork(data){
  //   console.log(data);
  //   registerUser()
  // }
  return (
    <div className={sty.container}>
      <div className={sty.wrapper}>
       <RegisterForm/>
      </div>
    </div>
  );
}
