"use client";

import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/lib/store/cart-store";

const checkoutSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  deliveryDate: z.string().min(1, "Choose a delivery date"),
  address: z.string().min(5, "Enter a delivery address"),
  notes: z.string().optional(),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

export function CheckoutForm() {
  const [submitted, setSubmitted] = useState(false);
  const clearCart = useCartStore((s) => s.clear);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutValues>({ resolver: zodResolver(checkoutSchema) });

  const onSubmit = async (_values: CheckoutValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="border border-border p-8 text-center">
        <CheckCircleIcon size={32} weight="fill" className="mx-auto text-accent" />
        <h2 className="mt-4 font-serif text-2xl text-foreground">
          Thanks — we&apos;ve got your details.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          This is a preview checkout — online payment isn&apos;t connected yet.
          Our team will reach out directly to confirm your order and take
          payment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="rounded-none border border-accent/40 bg-accent/5 p-4 text-xs text-secondary">
        Preview checkout — no payment is processed here. Submitting sends your
        order details for our team to confirm by phone or email.
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          error={errors.name?.message}
          inputProps={register("name")}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          error={errors.email?.message}
          inputProps={register("email")}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          error={errors.phone?.message}
          inputProps={register("phone")}
        />
        <Field
          id="deliveryDate"
          label="Delivery date"
          type="date"
          error={errors.deliveryDate?.message}
          inputProps={register("deliveryDate")}
        />
      </div>

      <Field
        id="address"
        label="Delivery address"
        error={errors.address?.message}
        inputProps={register("address")}
      />

      <div>
        <Label htmlFor="notes" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Notes (optional)
        </Label>
        <Textarea id="notes" rows={3} className="mt-3 rounded-none" {...register("notes")} />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isSubmitting ? "Sending…" : "Submit order details"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
  inputProps,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
  inputProps: UseFormRegisterReturn;
}) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-3 rounded-none"
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
