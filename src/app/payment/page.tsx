// "use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// // Install @stripe/stripe-js & @stripe/react-stripe-js
// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { createPaymentIntent } from "./action";

// // Initialize Stripe with the public key from environment variables
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);


// export default function CheckoutPage() {
//   // State to store the client secret, which is required for processing the payment
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   useEffect(() => {
//     // When the component mounts, request a new PaymentIntent from the server
//     createPaymentIntent()
//       .then((res) => {
//           setClientSecret(res.clientSecret); // Save the client secret to state
//       })
//   }, []);
//   console.log(clientSecret);

//   // While waiting for the client secret, show a loading message
//   if (!clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto" }}>
//       <h1>Checkout</h1>
//       {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
//       <Elements stripe={stripePromise} 
//       options={{ clientSecret }}>
//         <PaymentForm />
//       </Elements>
//     </div>
//   );
// }

// // Component that handles the payment form
// function PaymentForm() {
//   const stripe = useStripe(); // Hook to access Stripe methods
//   const elements = useElements(); // Hook to access Stripe elements
//   const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
//   const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent page refresh when submitting the form

//     if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

//     setIsProcessing(true); // Indicate that the payment is being processed

//     // Attempt to confirm the payment
//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required", // Redirect if required by the payment method
//     });

//     if (error) {
//       setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
//       setIsProcessing(false);
//     } else {
//       // Payment was successful
//       setErrorMessage(null);
//       alert("Payment successful!"); // Notify the user
//       setIsProcessing(false);
//       // You can optionally redirect the user to a success page here
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Stripe's payment element (handles input fields for card details, etc.) */}
//       <PaymentElement />
//       <button type="submit" 
//       disabled={!stripe || isProcessing}>
//         {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
//       </button>
//       {/* Display any error messages if they occur */}
//       {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
//     </form>
//   );
// }









// "use client";

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { createPaymentIntent } from "./action";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function CheckoutPage() {
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   useEffect(() => {
//     createPaymentIntent().then((res) => {
//       setClientSecret(res.clientSecret);
//     });
//   }, []);

//   if (!clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f8f9fa" }}>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div style={{ display: "flex", background: "white", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", overflow: "hidden", width: "800px" }}>
//         {/* Left Section */}
//         <div style={{ flex: 1, padding: "20px", textAlign: "center", borderRight: "1px solid #ddd" }}>
//           <p style={{ fontSize: "14px", color: "#555" }}>
//             Default sandbox <span style={{ background: "#f0ad4e", color: "white", padding: "2px 6px", borderRadius: "4px", fontSize: "12px" }}>TEST MODE</span>
//           </p>
//           <h3 style={{ marginTop: "20px" }}>Product name</h3>
//           <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>US$0.00</h2>
//         </div>
//         {/* Right Section */}
//         <div style={{ flex: 2, padding: "30px" }}>
//           <h2 style={{ marginBottom: "20px" }}>Pay with card</h2>
//           <Elements stripe={stripePromise} options={{ clientSecret }}>
//             <PaymentForm />
//           </Elements>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaymentForm() {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;
//     setIsProcessing(true);

//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required",
//     });

//     if (error) {
//       setErrorMessage(error.message || "An unknown error occurred");
//       toast.error(error.message || "Payment failed! Please try again.");
//       setIsProcessing(false);
//     } else {
//       setErrorMessage(null);
//       toast.success("Payment successful!");
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//       <PaymentElement />
//       <button type="submit" disabled={!stripe || isProcessing} style={{ padding: "12px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
//         {isProcessing ? "Processing..." : "Pay"}
//       </button>
//       {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
//     </form>
//   );
// }


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
