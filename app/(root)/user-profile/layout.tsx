import Navbar from "@/components/navbar/navbar";
import Container from "@/components/container";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
