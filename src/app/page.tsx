// import Header from "@/components/Header";
"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "motion/react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Faq from "@/components/Faq";
import RequestADemo from "@/components/RequestADemo";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import Why from "@/components/Why";
import SavingCalculator from "@/components/SavingCalculator";
import KpiBento from "@/components/KpiBento";
import Report from "@/components/Report";
import WorkFlow from "@/components/WorkFlow";
import KeyFeaturesBento from "@/components/KeyFeaturesBento";
import BusinessModule from "@/components/BusinessModule";
import Hero from "@/components/Hero";

interface MenuItem {
  name: string;
  layerName: string;
  ref: React.RefObject<HTMLElement>;
}

export default function Home() {
  const menuItems: MenuItem[] = [
    { name: "Home", layerName: "home", ref: useRef(null) },
    { name: "Features", layerName: "features", ref: useRef(null) },
    { name: "How it works", layerName: "howItWorks", ref: useRef(null) },
    { name: "Case Studies", layerName: "caseStudies", ref: useRef(null) },
    { name: "Contact us", layerName: "contactUs", ref: useRef(null) },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const isInView = useInView(menuItems[0].ref, { once: false });

  //   {
  //     img: "/study_1.png",
  //     title: "Best Practices for Conducting a Virtual Interview for HR Teams",
  //     desc: "As remote work and digital hiring become more prevalent, conducting virtual interviews has become an essential skill for HR teams.",
  //   },
  //   {
  //     img: "/study_2.png",
  //     title: "How Interview-as-a-Service Helps in Scaling Tech Teams",
  //     desc: "Interview-as-a-Service (IaaS) platforms revolutionize the hiring process by outsourcing initial technical interviews.",
  //   },
  //   {
  //     img: "/study_3.png",
  //     title:
  //       "Interviewing Gen Z: Adapting Virtual Interview Techniques for a New Generation",
  //     desc: "As the first generation to grow up fully immersed in technology, Gen Z brings unique qualities, skills, and expectations to the workforce.",
  //   },
  // ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative bg-[#f3f8fe] text-zinc-950 font-Manrope">
      {/* header */}
      <header className="sm:sticky w-full  top-0 z-20 flex justify-center items-center py-4 px-5 rounded-xl">
        <nav
          data-layername="menu"
          className={`flex justify-between items-center w-[170vh] sm:bg-[#f3f8fe]  sm:px-5 md:px-2 sm:py-2 px-0 py-0 rounded-xl ${
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
          <div className="sm:hidden  block">
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
          <div className="hidden sm:flex sm:flex-wrap gap-3.5 items-center px-5 ">
            <div className="flex items-center text-neutral-900 text-opacity-40">
              {menuItems.map((item) => (
                <div
                  key={item.layerName}
                  data-layername={item.layerName}
                  className="px-2 mx-2 text-sm py-1 whitespace-nowrap hover:text-black transition-colors duration-300 ease-in-out cursor-pointer font-semibold"
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <button
              data-layername="bookADemo"
              className="px-5 py-2 text-sm text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full hover:bg-gradient-to-tr transition-all duration-300 ease-in-out"
              onClick={() => scrollToSection(menuItems[4].ref)}
            >
              Book a demo
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-white z-30 flex flex-col p-5 sm:hidden  transition-all duration-200"
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
                        scrollToSection(item.ref);
                        toggleDrawer();
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                  <button
                    data-layername="bookADemo"
                    className="mt-5 px-5 py-3 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full hover:bg-gradient-to-tr transition-all duration-300 ease-in-out"
                    onClick={() => {
                      scrollToSection(menuItems[4].ref);
                      toggleDrawer();
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

      {/* hero */}
      <section ref={menuItems[0].ref}>
        <Hero />
      </section>

      {/* video */}
      {/* <section ref={videoRef} className="relative h-[100vh] w-full">
        <div className="w-full h-[100vh]">
          <Image
            src={"/section_2.png"}
            alt="section 2 backgroud"
            width={1440}
            height={600}
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={"/video_banner.png"}
            alt="video component"
            width={800}
            height={400}
          />
        </div>
      </section> */}

      {/* business model */}
      <BusinessModule />

      {/* key feature */}
      <section ref={menuItems[1].ref}>
        <KeyFeaturesBento />
      </section>

      {/* workflow */}
      <section ref={menuItems[2].ref}>
        <WorkFlow />
      </section>

      {/* Reports */}
      <Report />

      {/* kPI */}
      <KpiBento />

      {/* Clients */}
      {/* <section className="h-full flex flex-col items-center w-full py-10 bg-white">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            OUR CLIENTS
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Trusted by{" "}
            <span className="text-[#0e6cf6]">
              Organizations big and <br className="hidden md:block" /> small,
              around the world
            </span>
          </h2>

          <div className="w-full overflow-hidden my-10 px-4 md:px-8">
            <Image
              src={"/clients.png"}
              width={1440}
              height={200}
              alt={"clients logos"}
              className="object-contain w-full"
            />
          </div>

          <div className="bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] w-full flex flex-col md:flex-row items-center justify-center md:justify-between py-10 md:py-20 my-10 px-4 md:px-10">
            <h3 className="text-center md:text-left w-full md:w-[300px] text-white font-bold text-3xl md:text-4xl mb-6 md:mb-0">
              Trusted by
            </h3>
            <div className="w-full md:w-[1000px] bg-white px-2 py-5 md:py-10 rounded-l-full overflow-hidden">
              <Image
                src={"/clients.png"}
                width={1440}
                height={200}
                alt={"clients logos"}
                className="object-contain w-full"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-10 px-4 md:px-10">
            <div>
              <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm w-36 mx-auto md:mx-0">
                OUR CLIENTS
              </p>
              <h2 className="text-2xl md:text-3xl my-5 md:my-7 font-semibold text-center md:text-left">
                Trusted by{" "}
                <span className="text-[#0e6cf6]">
                  Organizations big and <br className="hidden md:block" />{" "}
                  small, around the world
                </span>
              </h2>
            </div>
            <div>
              <Image
                src={"/client-2.png"}
                width={440}
                height={200}
                alt={"clients logos"}
                className="object-contain w-full max-w-[440px]"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* savings */}
      <SavingCalculator />

      {/* why */}
      <Why />

      {/* case studies */}
      <section ref={menuItems[3].ref}>
        <CaseStudies />
      </section>

      {/* Faq's */}
      <Faq />

      {/* request a demo */}

      <RequestADemo />

      {/* footer */}
      <footer ref={menuItems[4].ref}>
        <Footer />
      </footer>
    </div>
  );
}
