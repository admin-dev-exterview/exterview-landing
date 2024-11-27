"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const plans = [
  {
    name: "INDIVIDUAL",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Access to a pre-vetted talent pool",
      "5 AI interviews per month",
      "AI sourcing",
      "Talent management dashboard",
    ],
    isCurrent: true,
  },
  {
    name: "EARLY STAGE",
    price: { monthly: 149, yearly: 1197 },
    features: [
      "Everything from Free",
      "20 AI interviews per month",
      "Bulk invite candidates to AI interviews",
      "Built-in ATS flow with custom pipelines",
    ],
    isCurrent: false,
  },
  {
    name: "GROWTH",
    price: { monthly: 499, yearly: 4816 },
    features: [
      "Everything from Early Stage",
      "100 AI interviews per month",
      "Custom questions only interview type",
      "Interview in 9 different languages",
      "Customize branding",
      "50+ custom ATS integrations built-in",
    ],
    isCurrent: false,
  },
];

function Page() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <div className="bg-[#f3f8fe] min-h-screen font-Manrope">
      <Header />
      <div className="py-8 px-4 flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold mb-8">
          Upgrade your plan
        </h1>
        {/* Toggle for Monthly/Yearly Pricing */}
        <div className="flex justify-center mb-8 bg-white w-fit rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-full ${
              billingCycle === "monthly" ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-full ${
              billingCycle === "yearly" ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            Yearly (33% off)
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg py-2 px-2 flex-1 `}
            >
              <div className="bg-gray-50 p-2 rounded-lg">
                <h2 className="text-sm font-normal mb-4 bg-white w-fit px-2 py-1 rounded-lg">
                  {plan.name}
                </h2>
                <p className="text-2xl font-bold text-gray-700 mb-4">
                  ${plan.price[billingCycle]}{" "}
                  <span className="text-sm text-gray-500">
                    / {billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </p>
                {!plan.isCurrent ? (
                  <button className="bg-[#0e6cf6] text-white w-full py-3 rounded-full text-sm font-bold">
                    Upgrade
                  </button>
                ) : (
                  <p
                    // className="text-green-600 font-semibold mb-4"
                    className=" w-full py-3 rounded-full border border-green-600 text-center text-sm font-bold"
                  >
                    <span className="text-green-600">✔</span> You&apos;re
                    currently on this
                  </p>
                )}
              </div>
              <div className="my-4 space-y-2 text-sm text-gray-500 px-2">
                FEATURES
              </div>
              <ul className="my-4 space-y-2 text-sm px-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">
                    <span className="text-green-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Custom Pricing Banner */}
        <div className="mt-8 text-center  bg-white w-fit rounded-lg px-20 py-4 font-bold">
          <p>
            More than 100 interviews per month?{" "}
            <a href="#" className=" text-[#0e6cf6]">
              Get custom pricing
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
