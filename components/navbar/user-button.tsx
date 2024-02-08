"use client";
import UserMenu from "./user-menu";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import useRentModal from "@/hooks/useRentModal";
import { ExtendedUser } from "@/next-auth";

type Props = {
  user: null | undefined | ExtendedUser;
  pagetype: string;
};

export default function UserButton({ user }: Props) {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      {user ? (
        <UserMenu user={user} />
      ) : (
        <div className="space-x-4 flex flex-row">
          <button
            className="hover:underline cursor-pointer"
            onClick={loginModal.onOpen}
          >
            Login
          </button>
          <button
            className="hover:underline cursor-pointer"
            onClick={registerModal.onOpen}
          >
            Register
          </button>
        </div>
      )}
    </>
  );
}
