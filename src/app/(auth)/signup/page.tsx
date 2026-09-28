import Link from "next/link";
import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/auth-card";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = { title: "Create account — Bakerai" };

export default function SignupPage() {
  return (
    <AuthCard
      eyebrow="Join Bakerai"
      title="Create your account"
      subtitle="Preview only — no real account is created or verified yet."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthCard>
  );
}
