import Link from "next/link";
import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = { title: "Sign in — Bakerai" };

export default function LoginPage() {
  return (
    <AuthCard
      eyebrow="Welcome back"
      title="Sign in"
      subtitle="Preview only — no real account is created or verified yet."
      footer={
        <>
          New here?{" "}
          <Link href="/signup" className="text-accent hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
