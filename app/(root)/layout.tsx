import Navbar from "@/components/navbar/navbar";
import { handleRedirect } from "@/functions/auth/redirect";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  handleRedirect;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
