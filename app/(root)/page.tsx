import { getCurrentUser } from "@/functions/auth/getters";
import Dashboard from "@/components/dashboard/dashboard";
import { Testt } from "./components/test";
import Container from "@/components/container";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <Dashboard user={currentUser} />
    </Container>
  );
}
