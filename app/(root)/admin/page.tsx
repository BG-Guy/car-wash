import { checkIsAdmin } from "@/functions/auth/getters";

export default async function AdminPage() {
  const isAdmin = await checkIsAdmin();

  const notAllowed = () => {
    return <div>NOT ALLOWED</div>;
  };

  return isAdmin ? <div>admin page</div> : notAllowed();
}
