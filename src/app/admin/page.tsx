import { checkAuth } from "./actions";
import AdminPanel from "./AdminPanel";

export const metadata = {
  title: "Admin | KPR Fit Dieta Żukowo",
  robots: "noindex, nofollow",
};

export default async function AdminPage() {
  const isAuth = await checkAuth();
  return <AdminPanel initialAuth={isAuth} />;
}
