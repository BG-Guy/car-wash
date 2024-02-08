import { auth } from "@/auth";
import Container from "@/components/container";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
