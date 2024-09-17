// import React, { useState } from "react";

// const DonationPortal = () => {
//   const [donationAmount, setDonationAmount] = useState("");
//   const [customAmount, setCustomAmount] = useState("");
//   const [recurring, setRecurring] = useState(false);
//   const [donorName, setDonorName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit form logic goes here, you can integrate Stripe or PayPal here
//     console.log({
//       donationAmount: donationAmount || customAmount,
//       recurring,
//       donorName,
//       email,
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Make a Donation</h2>
        
//         {/* Donation Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
          
//           {/* Name Input */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="John Doe"
//               value={donorName}
//               onChange={(e) => setDonorName(e.target.value)}
//               required
//             />
//           </div>
          
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="example@domain.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Preset Donation Amounts */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Select Donation Amount</label>
//             <div className="grid grid-cols-3 gap-4">
//               <button
//                 type="button"
//                 className={`p-2 border rounded-md ${donationAmount === "10" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
//                 onClick={() => setDonationAmount("10")}
//               >
//                 $10
//               </button>
//               <button
//                 type="button"
//                 className={`p-2 border rounded-md ${donationAmount === "50" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
//                 onClick={() => setDonationAmount("50")}
//               >
//                 $50
//               </button>
//               <button
//                 type="button"
//                 className={`p-2 border rounded-md ${donationAmount === "100" ? "bg-indigo-600 text-white" : "bg-gray-100"}`}
//                 onClick={() => setDonationAmount("100")}
//               >
//                 $100
//               </button>
//             </div>
//           </div>

//           {/* Custom Donation Amount */}
//           <div>
//             <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700">
//               Or Enter Custom Amount
//             </label>
//             <input
//               type="number"
//               id="customAmount"
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter custom amount"
//               value={customAmount}
//               onChange={(e) => setCustomAmount(e.target.value)}
//             />
//           </div>

//           {/* Recurring Donation Option */}
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="recurring"
//               className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//               checked={recurring}
//               onChange={(e) => setRecurring(e.target.checked)}
//             />
//             <label htmlFor="recurring" className="ml-2 block text-sm text-gray-900">
//               Make this a recurring donation
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-150"
//             >
//               Donate Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DonationPortal;

import React, { useState,useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51PzMSe05Gyt6B6vBXOK1bLzgJ6vaSbFjbZy91o1CTmyq1eGyaFSlNbp3tizqo2q20UKSRG72Wc1S82N9KeHnxVo000OOnsVRqz');

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

// Donation Portal Page
const DonationForm = () => {
  const token = localStorage.getItem('accessToken');
  const [amount, setAmount] = useState(0);
  const [donationType, setDonationType] = useState('one-time');
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // Redirect to login page if not logged in
      toast.error("Please Logged in")
      document.getElementById('my_modal_3').showModal();
    }
  }, [token]);

  // Handle donation payment submission
  const handleDonate = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    try {
      // Create a checkout session on the server
      const response = await fetch('http://localhost:8001/donation/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount,
          donationType,
        }),
      });

      const session = await response.json();

      if (!session.clientSecret) {
        throw new Error("Failed to create payment session");
      }

      // Get the CardElement from Stripe Elements
      const cardElement = elements.getElement(CardElement);

      // Confirm the PaymentIntent with card details
      const result = await stripe.confirmCardPayment(session.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
      if (result.error) {
        console.error(result.error.message);
      }

    } catch (error) {
      console.error('Error creating checkout session:', error);
    }

    setLoading(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Donation Portal</h1>

      {/* Donation Form */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount</label>
          <div className="flex space-x-4">
            <button onClick={() => setAmount(10)} className={`py-2 px-4 rounded-lg ${amount === 10 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>$10</button>
            <button onClick={() => setAmount(50)} className={`py-2 px-4 rounded-lg ${amount === 50 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>$50</button>
            <button onClick={() => setAmount(100)} className={`py-2 px-4 rounded-lg ${amount === 100 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>$100</button>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="py-2 px-4 rounded-lg border-2 border-gray-300"
              placeholder="Custom Amount"
            />
          </div>
        </div>

        {/* Donation Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type</label>
          <select
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className="py-2 px-4 rounded-lg border-2 border-gray-300 w-full"
          >
            <option value="one-time">One-Time Donation</option>
            <option value="recurring">Recurring Donation</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Details</label>
          <CardElement className="py-2 px-4 border-2 border-gray-300 rounded-lg" />
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="w-full py-2 px-4 rounded-lg bg-blue-500 text-white font-bold"
          disabled={loading}
        >
          {loading ? 'Processing...' : `Donate $${amount}`}
        </button>
      </div>
    </div>
  );
};

const DonationPage = () => (
  <Elements stripe={stripePromise}>
    <DonationForm />
  </Elements>
);



export default DonationPage;
