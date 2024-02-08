"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ExtendedUser } from "@/next-auth";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  // Add the user prop to the MainNavProps
  user: null | undefined | ExtendedUser;
}

export function MainNav({ className, user, ...props }: MainNavProps) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
      role: "any",
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
      role: "any",
    },
    {
      href: `/admin/services`,
      label: "Service Editor",
      active: pathname === `/admin/services`,
      role: "ADMIN",
    },
    {
      href: `/admin/automobiles`,
      label: "Automobile Editor",
      active: pathname === `/admin/automobiles`,
      role: "ADMIN",
    },
  ];

  return (
    <nav className={cn("", className)} {...props}>
      {routes
        .filter((route) =>
          route.role === "ADMIN" ? user?.role === "ADMIN" : true
        )
        .map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "font-medium font-inter transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
    </nav>
  );
}
