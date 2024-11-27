"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Footer() {
  const router = useRouter();
  return (
    <section
      // ref={menuItems[4].ref}
      className="w-full sm:pr-48 sm:pl-20 pl-5 pr-5 py-10 h-100vh flex sm:flex-row flex-col sm:gap-2 gap-10 items-start justify-between bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] overflow-hidden text-white"
    >
      <div className="flex flex-col items-start gap-2">
        <div className="z-10">
          <Image
            src={"/white-logo.png"}
            width={220}
            height={70}
            alt="white logo"
          />
        </div>
        <p className="w-96">
          Introducing the world&apos;s first ever AI that can run screening
          calls and shortlist thousands of candidates in a blink of an eye
        </p>
        <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] cursor-pointer rounded-full p-2 px-3">
          <FaPhoneVolume />
          +91 96525 21125
        </button>
        <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] cursor-pointer rounded-full p-2 px-3">
          <MdOutlineAlternateEmail />
          info@exterview.io
        </button>
        <p>Copyright © 2024 — exterview</p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-semibold">Quick Links</h2>
        <a className="font-light cursor-pointer">Home</a>
        <a
          className="font-light cursor-pointer"
          onClick={() => router.push("/booking")}
        >
          Book a Demo
        </a>
        <a
          className="font-light cursor-pointer"
          onClick={() => router.push("/pricing")}
        >
          Pricing
        </a>
        <a
          className="font-light cursor-pointer"
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </a>
        <a
          className="font-light cursor-pointer"
          onClick={() => router.push("/refund-cancellation-policy")}
        >
          Refund & Cancellation Policy
        </a>
        <a
          className="font-light cursor-pointer"
          onClick={() => router.push("/privacy-policy")}
        >
          Privacy Policty
        </a>
        <a
          className="font-light cursor-pointer"
          onClick={() => router.push("/terms-and-conditions")}
        >
          Terms of Service
        </a>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-semibold">Social</h2>
        <p className="font-light cursor-pointer">Facebook</p>
        <p className="font-light cursor-pointer">Instagram</p>
        <p className="font-light cursor-pointer">Twitter</p>
      </div>
    </section>
  );
}

export default Footer;
