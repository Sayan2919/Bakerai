"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/components/auth/mock-session-provider";

const signupSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupValues = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { signup } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (values: SignupValues) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    signup(values.name, values.email);
    router.push("/account");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <Label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Full name
        </Label>
        <Input
          id="name"
          className="mt-3 rounded-none"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-email" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Email
        </Label>
        <Input
          id="signup-email"
          type="email"
          className="mt-3 rounded-none"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "signup-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="signup-email-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-password" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Password
        </Label>
        <div className="relative mt-3">
          <Input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            className="rounded-none pr-10"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "signup-password-error" : undefined}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>
        {errors.password && (
          <p id="signup-password-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isSubmitting ? "Creating account…" : "Create account"}
      </Button>
    </form>
  );
}
