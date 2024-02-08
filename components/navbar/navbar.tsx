import { MainNav } from "@/components/navbar/main-nav";

import Logo from "./Logo";
import Container from "../container";
import UserButton from "./user-button";
import { MobileNav } from "./mobile-nav";
import { getCurrentUser } from "@/functions/auth/getters";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="border-b py-1 ">
      <Container>
        <div
          className={`hidden sm:flex items-center h-[var(--navbar-height)] gap-4`}
        >
          <Logo />
          <MainNav
            className="flex items-center space-x-4 lg:space-x-6 ml-auto"
            user={currentUser}
          />
          <UserButton pagetype="server" user={currentUser} />
        </div>
        <MobileNav
          className="sm:hidden items-start justify-center flex flex-col h-[var(--navbar-height)]"
          user={currentUser}
        />
      </Container>
    </div>
  );
};

export default Navbar;
