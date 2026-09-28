"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "@/components/auth/mock-session-provider";

export default function AccountPage() {
  const { user, isAuthenticated, isHydrated, logout } = useSession();

  if (!isHydrated) return null;

  if (!isAuthenticated) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl text-foreground">
          You&apos;re not signed in
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sign in to view your account.
        </p>
        <Button asChild className="mt-6 rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">Account</p>
      <h1 className="mt-3 font-serif text-4xl text-foreground">
        Welcome, {user?.name}
      </h1>

      <div className="mt-8 space-y-6 border border-border p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</p>
          <p className="mt-1 text-foreground">{user?.name}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
          <p className="mt-1 text-foreground">{user?.email}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Orders</p>
          <p className="mt-1 text-sm text-muted-foreground">
            No orders yet — once our backend is live, your order history will
            show up here.
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={logout}
        className="mt-6 rounded-none"
      >
        Sign out
      </Button>
    </div>
  );
}
