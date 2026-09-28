import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-foreground">Checkout</h1>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </div>
  );
}
