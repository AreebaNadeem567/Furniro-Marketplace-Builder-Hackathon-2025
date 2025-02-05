"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    createPaymentIntent().then((res) => {
      setClientSecret(res.clientSecret);
    });
  }, []);

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-6">Pay with Card</h2>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
      toast.error(error.message || "Payment failed! Please try again.");
      setIsProcessing(false);
    } else {
      setErrorMessage(null);
      toast.success("Payment successful!");
      setIsProcessing(false);
      setSuccess(true); // Show success card
    }
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-green-600 text-2xl font-semibold mb-4">Payment Successful!</h2>
        <p>Your transaction has been completed successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
      >
        {isProcessing ? "Processing..." : "Pay"}
      </button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </form>
  );
}
