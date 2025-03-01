import { Suspense } from "react";
import sty from "./admin.module.css"
import AdminPost from "@/components/admin/adminPost";
import AdminPostForm from "@/components/admin/adminPostForm";
import AdminUser from "@/components/admin/adminUset";
import AdminUserForm from "@/components/admin/adminUserForm";
import { auth } from "@/libs/auth";


export default async function AdminPage() {

  const sess = await auth()
  // console.log(sess);
  
  return (
    <div className={sty.container}>
      <div className={sty.row}>
          <div className={sty.column}>
              <Suspense fallback={<div>Loading...</div>}>
                  <AdminPost />
              </Suspense>
          </div>
          <div className={sty.column}>
                  <AdminPostForm userId={sess.user.id}/>
          </div>
      </div>
      <div className={sty.row}>
          <div className={sty.column}>
              <Suspense fallback={<div>Loading...</div>}>
                  <AdminUser />
              </Suspense>
          </div>
          <div className={sty.column}>
                  <AdminUserForm userId={sess.user.id}/>
          </div>
      </div>
    </div>
  );
}
