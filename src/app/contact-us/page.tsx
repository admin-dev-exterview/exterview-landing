"use client";
import HubspotForm from "@/components/HubSpotForm";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

interface MenuItem {
  name: string;
  layerName: string;
  ref: React.RefObject<HTMLElement>;
}

export default function ContactPage() {
  const menuItems: MenuItem[] = [
    { name: "Home", layerName: "home", ref: useRef(null) },
    { name: "Features", layerName: "features", ref: useRef(null) },
    { name: "How it works", layerName: "howItWorks", ref: useRef(null) },
    { name: "Case Studies", layerName: "caseStudies", ref: useRef(null) },
    { name: "Contact us", layerName: "contactUs", ref: useRef(null) },
  ];
  const isInView = useInView(menuItems[0].ref, { once: false });
  const router = useRouter();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="bg-[#f3f8fe]">
      <header
        ref={menuItems[0].ref}
        className="sm:sticky top-0 z-20 flex justify-between items-center py-4 px-5 rounded-xl"
      >
        <nav
          data-layername="menu"
          className={`flex justify-between items-center w-full sm:bg-[#f3f8fe]  sm:px-5 sm:py-2 px-0 py-0 rounded-xl ${
            isInView ? "border-none" : "border"
          }`}
        >
          {/* Logo */}
          <Image
            src={"/logo.png"}
            alt="Exterview logo"
            width={130}
            height={40}
            className="object-contain shrink-0"
          />

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              className="p-2 focus:outline-none"
              onClick={toggleDrawer}
              aria-label="Toggle Menu"
            >
              {isDrawerOpen ? (
                <RxCross2 width={24} height={24} />
              ) : (
                <RxHamburgerMenu width={24} height={24} />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3.5 items-center px-5 ">
            <div className="flex items-center text-neutral-900 text-opacity-40">
              {menuItems.map((item) => (
                <div
                  key={item.layerName}
                  data-layername={item.layerName}
                  className="px-7 py-1 whitespace-nowrap hover:text-black transition-colors duration-300 ease-in-out cursor-pointer font-semibold"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <button
              data-layername="bookADemo"
              className="px-6 py-2 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full hover:bg-gradient-to-tr transition-all duration-300 ease-in-out"
            >
              Book a demo
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-white z-30 flex flex-col p-5 md:hidden transition-all duration-200"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <div className="flex justify-between items-center">
                  <Image
                    src={"/logo.png"}
                    alt="Exterview logo"
                    width={120}
                    height={30}
                    className="object-contain"
                  />
                  <button
                    className="p-2 focus:outline-none"
                    onClick={toggleDrawer}
                    aria-label="Close Menu"
                  >
                    <RxCross2 width={24} height={24} />
                  </button>
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  {menuItems.map((item) => (
                    <div
                      key={item.layerName}
                      data-layername={item.layerName}
                      className="px-3 py-2 border-b border-neutral-200 text-neutral-900 cursor-pointer"
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                  <button
                    data-layername="bookADemo"
                    className="mt-5 px-5 py-3 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full hover:bg-gradient-to-tr transition-all duration-300 ease-in-out"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Book a demo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      <div className=" py-10 flex sm:flex-row flex-col items-center justify-between px-16">
        <div className="w-full">.</div>
        <div className="w-full">
          <HubspotForm />
        </div>
        {/* footer */}
      </div>
      <section className="w-full sm:pr-48 sm:pl-20 pl-5 pr-5 py-10 h-100vh flex sm:flex-row flex-col sm:gap-2 gap-10 items-start justify-between bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] overflow-hidden text-white">
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
            +91 9111 4851 04
          </button>
          <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] cursor-pointer rounded-full p-2 px-3">
            <MdOutlineAlternateEmail />
            info.exterview.io
          </button>
          <p>Copyright © 2024 — exterview</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold">Quick Links</h2>
          <a className="font-light cursor-pointer">Home</a>
          <a
            className="font-light cursor-pointer"
            onClick={() => router.push("/contact-us")}
          >
            Book a Demo
          </a>
          <a className="font-light cursor-pointer">Pricing</a>
          <a className="font-light cursor-pointer">Contact Us</a>
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
    </div>
  );
}
