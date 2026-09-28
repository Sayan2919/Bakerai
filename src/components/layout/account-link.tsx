"use client";

import Link from "next/link";
import { UserCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { useSession } from "@/components/auth/mock-session-provider";

export function AccountLink() {
  const { isAuthenticated, user, isHydrated } = useSession();

  return (
    <Link
      href={isHydrated && isAuthenticated ? "/account" : "/login"}
      className="inline-flex items-center gap-2 rounded-full p-3 transition-colors hover:bg-muted sm:p-2"
      aria-label={isHydrated && isAuthenticated ? `Account, ${user?.name}` : "Log in"}
    >
      <UserCircleIcon size={20} weight="regular" />
    </Link>
  );
}
