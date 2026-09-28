"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Tell us a little more"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (_values: ContactValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-8 text-center">
        <CheckCircleIcon size={32} weight="fill" className="mx-auto text-accent" />
        <h2 className="mt-4 font-serif text-2xl text-foreground">Message sent</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We&apos;ll get back to you within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Name
          </Label>
          <Input
            id="contact-name"
            className="mt-3 rounded-none"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            className="mt-3 rounded-none"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="event-date" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Event date (optional)
        </Label>
        <Input id="event-date" type="date" className="mt-3 rounded-none" {...register("eventDate")} />
      </div>

      <div>
        <Label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          rows={5}
          className="mt-3 rounded-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
