import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useSecureAxios from "../../../hook/useSecureAxios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useSecureAxios();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            trackingId: res.data.trackingId,

            transactionId: res.data.transactionId
          });
        });
    }
  }, [sessionId, axiosSecure]);

  console.log(sessionId);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <div className="bg-green-100 p-4 rounded-full mb-4">
          {/* simple check SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          Payment Successful
        </h1>
        <p className="text-slate-600 mt-2">
          Your payment has been completed. Thank you for choosing Zap-Shift
          Delivery.
        </p>
        <p>your tracking id: <span className="hover:text-green-500 hover:underline">{paymentInfo.trackingId}</span></p>
        <p>your transaction id: <span className="hover:text-green-500 hover:underline">{paymentInfo.transactionId}</span></p>

        <div className="mt-6 w-full">
          <Link
            to="/"
            className="btn btn-primary py-3 rounded-lg bg-green-600 text-white font-medium"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
