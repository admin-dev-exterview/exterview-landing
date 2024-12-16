"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Footer() {
  const router = useRouter();
  return (
    <section className="w-full font-Manrope sm:px-36 px-0 pl-5 pr-5 py-10 h-100vh flex sm:flex-row flex-col sm:gap-2 gap-10 items-start justify-between bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] overflow-hidden text-white">
      <div className="flex flex-col items-start gap-5">
        <div className="z-10">
          <Image
            src={"/white-logo.png"}
            width={100}
            height={70}
            alt="white logo"
          />
        </div>
        <p className="w-96 font-light">
          Introducing the world&apos;s first ever AI that can run screening
          calls and shortlist thousands of candidates in a blink of an eye
        </p>
        <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] cursor-pointer rounded-lg p-2 px-3">
          <FaPhoneVolume />
          +91 96525 21125
        </button>
        <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] cursor-pointer rounded-lg p-2 px-3">
          <MdOutlineAlternateEmail />
          info@exterview.io
        </button>
        <p className="text-sm font-extralight">
          Copyright © 2024 - Exterview Solutions Private Limited
        </p>
      </div>
      <div className="flex flex-col items-start gap-5">
        <h2 className="font-medium tracking-wider text-sm ">Quick Links</h2>
        <div className="flex flex-col items-start gap-2 text-sm">
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
      </div>
      <div className="flex flex-col items-start gap-5">
        <h2 className="font-semibold tracking-wider text-sm">Social</h2>
        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="font-light cursor-pointer">Facebook</p>
          <p className="font-light cursor-pointer">Instagram</p>
          <p className="font-light cursor-pointer">Twitter</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
