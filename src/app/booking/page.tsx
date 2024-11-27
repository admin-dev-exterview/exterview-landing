"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HubspotForm from "@/components/HubSpotForm";

export default function ContactPage() {
  return (
    <div className="bg-[#f3f8fe]">
      <Header />
      <div className=" py-10 flex sm:flex-row flex-col items-center justify-between px-16">
        <div className="w-full">.</div>
        <div className="w-full">
          <HubspotForm />
        </div>
        {/* footer */}
      </div>
      <Footer />
    </div>
  );
}
