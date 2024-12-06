"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    caption: "Best for Individuals or Small Teams Trying Out the Platform",
    features: [
      "Up to 3 team members",
      "3 credits/month (generate reports, conduct interviews, or use coding environments)",
      "Last 3 assignment history",
      "Sharable video playback link",
      "Shareable report",
      "Downloadable PDF report",
      "Leaderboard",
      "Detailed interview report",
      "Live coding environment playback",
    ],
    isCurrent: true,
  },
  {
    name: "Team",
    price: { monthly: 15000, yearly: 135000 },
    caption: "Best for Small Companies Hiring Actively",
    features: [
      "Up to 20 team members (1 admin included)",
      "50 credits/month for generating reports, conducting interviews, or assessments",
      "Choice of 10 units or 25 units for internal/external interview configuration",
      "Unlimited assignment history",
      "Sharable video playback link",
      "Shareable report",
      "Downloadable PDF report",
      "Leaderboard",
      "Reports and analytics",
      "Custom forms",
      "Basic branding",
    ],
    isCurrent: false,
  },
  {
    name: "Business",
    price: { monthly: 60000, yearly: 550000 },
    caption: "Best for Large Companies Scaling Their Hiring Process",
    features: [
      "Up to 50 team members (3 admins included)",
      "120 credits/month for generating reports, conducting interviews, or assessments",
      "Choice of 25 units or 75 units for internal/external interview configuration",
      "Unlimited assignment history",
      "Sharable video playback link",
      "Shareable report",
      "Downloadable PDF report",
      "Leaderboard",
      "Advanced branding",
      "ATS integration",
      "SAML + SSO",
      "Priority support",
      "Custom feedback formats",
      "Advanced reports",
    ],
    isCurrent: false,
  },
  {
    name: "Enterprise",
    isCustom: true,
    price: { monthly: "Custom", yearly: "Custom" },
    caption: "Fully Customizable for Enterprise Needs",
    features: [
      "Team Size: Customizable",
      "Customizable credits/month",
      "Choice of 75 units or 100 units for internal/external interview configuration",
      "Unlimited assignment history",
      "Sharable video playback link",
      "Shareable report",
      "Downloadable PDF report",
      "Leaderboard",
      "Import questions",
      "Dedicated account manager",
      "Advanced branding",
      "Tailored reports and analytics",
      "Fully customizable workflows and forms",
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
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg py-2 px-2 flex-1 `}
            >
              <div className="bg-gray-50 p-2 rounded-lg max-h-[200px] min-h-[200px] flex flex-col justify-between">
                <h2 className="text-sm font-normal bg-white w-fit px-2 py-1 rounded-lg">
                  {plan.name}
                </h2>
                <p className="text-[12px] my-2  px-1">{plan?.caption}</p>
                {plan?.isCustom ? (
                  <p className="text-2xl font-bold text-gray-700 mb-4">
                    Custom
                  </p>
                ) : (
                  <p className="text-2xl font-bold text-gray-700 mb-4">
                    ₹{plan.price[billingCycle]}{" "}
                    <span className="text-sm text-gray-500">
                      / {billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </p>
                )}

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
