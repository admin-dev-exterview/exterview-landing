// import Header from "@/components/Header";
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoStar } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveRightIcon } from "lucide-react";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Slider } from "@/components/ui/slider";
import { useInView, motion, AnimatePresence } from "motion/react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

interface MenuItem {
  name: string;
  layerName: string;
  ref: React.RefObject<HTMLElement>;
}

const business = [
  { name: "Raas", desc: "Resume as a Service", img: "/raas.png" },
  { name: "Daas", desc: "Database as a Service", img: "/daas.png" },
  { name: "Paas", desc: "Platform as a Service", img: "/paas.png" },
  { name: "Iaas", desc: "Interview as a Service", img: "/iaas.png" },
  { name: "Maas", desc: "Mentorship as a Service", img: "/maas.png" },
];

const businessDialog = [
  {
    name: "Raas",
    head: "Resume as a Service",
    des: "Centralized, AI-supported resume database for initial candidate scoring and matching based on job roles and requirements.",
    img: "/raas_d.png",
  },
  {
    name: "Daas",
    head: "Database as a Service",
    des: "Secure and scalable candidate database with advanced search, seamlessly integrated with your HRMS/ATS systems.",
    img: "/daas_d.png",
  },
  {
    name: "Paas",
    head: "Platform as a Service",
    des: "A cloud-based recruitment platform that adapts to your enterprise's needs, with API integrations for flexible scaling.",
    img: "/paas_d.png",
  },
  {
    name: "Iaas",
    head: "Interview as a Service",
    des: "Human-led interviews, coordinated through our platform, with AI providing post-interview analysis and performance insights.",
    img: "/iaas_d.png",
  },
  {
    name: "Maas",
    head: "Mentorship as a Service",
    des: "One-on-one career mentorship, with real-time feedback and professional development from industry experts.",
    img: "/maas_d.png",
  },
];

const workImage = [
  { id: "1", img: "/work_1.png" },
  { id: "2", img: "/work_2.png" },
  { id: "3", img: "/work_3.png" },
];

export default function Home() {
  const menuItems: MenuItem[] = [
    { name: "Home", layerName: "home", ref: useRef(null) },
    { name: "Features", layerName: "features", ref: useRef(null) },
    { name: "How it works", layerName: "howItWorks", ref: useRef(null) },
    { name: "Case Studies", layerName: "caseStudies", ref: useRef(null) },
    { name: "Contact us", layerName: "contactUs", ref: useRef(null) },
  ];
  const videoRef = useRef(null);
  // const featuresRef = useRef(null);
  // const worksRef = useRef(null);
  // const studiesRef = useRef(null);
  // const contactRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const businessRef = useRef(null);
  const isInView = useInView(menuItems[0].ref, { once: false });
  const businessInView = useInView(businessRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [activeBusiness, setActiveBusiness] = useState("Raas");
  const [activeWork, setActiveWork] = useState("1");

  const activeBusinessDialog = businessDialog.find(
    (item) => item.name === activeBusiness
  );
  const activeWorkImage = workImage.find((item) => item.id === activeWork);

  const items = [
    {
      title: "What is Exterview?",
      content:
        "Exterview is an Interview-as-a-Service platform that automates the hiring process from resume screening to final interview feedback.",
    },
    {
      title: "How does AI resume screening work?",
      content:
        "Exterview is an Interview-as-a-Service platform that automates the hiring process from resume screening to final interview feedback.",
    },
    {
      title: "Can I integrate Exterview with my ATS?",
      content:
        "Exterview is an Interview-as-a-Service platform that automates the hiring process from resume screening to final interview feedback.",
    },
    {
      title: "What industries do you serve?",
      content:
        "Exterview is an Interview-as-a-Service platform that automates the hiring process from resume screening to final interview feedback.",
    },
  ];
  const reportItems = [
    {
      img: "/files.png",
      title: "AI-Driven Reports",
      content:
        "Detailed, post-interview analysis that evaluates skills and provides behavioral insights.",
    },
    {
      img: "/cube.png",
      title: "Interviewer Metrics",
      content:
        "Track interviewer efficiency and performance with in-depth data, helping improve future interview processes.",
    },
    {
      img: "/ruler.png",
      title: "Scalable Analytics",
      content:
        "Use our powerful analytics tools to make strategic hiring decisions, all customizable to your needs.",
    },
  ];
  const caseStudies = [
    {
      img: "/study_1.png",
      title: "The Future of AI",
      desc: "Get detailed, AI-analyzed reports on candidate performance, including skill assessments and behavioral insights.",
    },
    {
      img: "/study_2.png",
      title: "The Metaverse Explained",
      desc: "Get detailed, AI-analyzed reports on candidate performance, including skill assessments and behavioral insights.",
    },
    {
      img: "/study_3.png",
      title: "Top 5 Productivity Apps",
      desc: "Get detailed, AI-analyzed reports on candidate performance, including skill assessments and behavioral insights.",
    },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [plannedHires, setPlannedHires] = useState(1000);
  const [applicantsPerPosition, setApplicantsPerPosition] = useState(3000);
  const [avgScreeningTime, setAvgScreeningTime] = useState(60);

  const totalManMin = plannedHires * applicantsPerPosition * avgScreeningTime;

  const totalManHour = totalManMin > 60 ? totalManMin / 60 : totalManMin;
  const totalManHourCal = totalManMin > 60 ? totalManMin / 60 : 1;

  const aiScreeningTime = 5;
  const totalAiHours =
    (plannedHires * applicantsPerPosition * aiScreeningTime) / 60;

  const savedHours = totalManHourCal - totalAiHours;
  const percentSaved = ((savedHours / totalManHourCal) * 100).toFixed(2);

  const [imageIndex, setImageIndex] = useState(0);

  // Array to hold the image sources
  const images = ["/landing_1.png", "/landing_2.png", "/landing_3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <div className="relative bg-[#f3f8fe] text-zinc-950 font-Manrope">
      {/* header */}
      <header className="sticky top-0 z-20 flex justify-between items-center py-4 px-5 rounded-xl">
        <nav
          data-layername="menu"
          className={`flex justify-between items-center w-full sm:bg-[#f3f8fe] sm:bg-opacity-80 sm:backdrop-blur-sm  sm:px-2 sm:py-2 px-0 py-0 rounded-xl ${
            isInView ? "border-none" : "border"
          }`}
        >
          {/* Logo */}
          <Image
            src={"/logo.png"}
            alt="Exterview logo"
            width={180}
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
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <button
              data-layername="bookADemo"
              className="px-6 py-2 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full hover:bg-gradient-to-tr transition-all duration-300 ease-in-out"
              onClick={() => scrollToSection(menuItems[4].ref)}
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
      <motion.section
        ref={menuItems[0].ref}
        className="h-[100vh] w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {isInView && (
          <div className="flex sm:flex-row flex-col w-full gap-10 justify-center items-center sm:px-28 px-5 mt-10">
            <div>
              <p className="flex gap-1 items-center mb-2">
                <IoStar className="text-[#0e6cf6]" />
                <IoStar className="text-[#0e6cf6]" />
                <IoStar className="text-[#0e6cf6]" />
                <IoStar className="text-[#0e6cf6]" />
                <IoStar className="text-[#0e6cf6]" />
                <span className="ml-1 text-[#10161D] opacity-50 text-sm">
                  Trusted by Clients
                </span>
              </p>
              <h1 className="sm:text-7xl text-5xl font-semibold ">
                Next-Gen <br />
                <span className="text-[#0e6cf6]">Recruitment</span>
                <br /> with Exterview
              </h1>
              <p className="sm:text-xl text-lg text-[#10161D] opacity-50 leading-tight my-2 mb-5 font-light pl-2">
                Real-time insights and automation for modern
                <br />
                recruitment, with experienced interviewers driving
                <br />
                every hiring decision.
              </p>
              <div className="flex gap-5">
                <button
                  data-layername="bookADemo"
                  className="px-8 py-3 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full hover:bg-gradient-to-tr transition-all duration-300 ease-in-out"
                  onClick={() => scrollToSection(menuItems[4].ref)}
                >
                  Book a demo
                </button>
                <button
                  data-layername="bookADemo"
                  className="px-5 py-3 flex items-center text-black gap-2 bg-transparent border border-zinc-400 rounded-full"
                  onClick={() => scrollToSection(videoRef)}
                >
                  <Image
                    src={"/play.png"}
                    alt="play icon"
                    width={12}
                    height={12}
                  />
                  Watch the video
                </button>
              </div>
            </div>
            <motion.div
              className="relative sm:w-[626px] sm:h-[525px] w-[300px] h-[300px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={images[imageIndex]}
                alt={`Carousel image ${imageIndex + 1}`}
                width={626}
                height={525}
                className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
              />
            </motion.div>
          </div>
        )}
      </motion.section>
      {/* video */}
      <section ref={videoRef} className="relative h-[100vh] w-full">
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
      </section>
      {/* business model */}
      <motion.section
        ref={businessRef}
        className="h-full w-full py-10 items-center justify-center flex flex-col"
        initial="hidden"
        animate={businessInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={itemVariants}
        >
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            BUSINESS MODULES
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Take your business to the global <br /> forefront with{" "}
            <span className="text-[#0e6cf6]">Exterview</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex w-full sm:gap-10 gap-3 items-center justify-center sm:px-0 px-2"
          variants={containerVariants}
        >
          {business.map((item) => (
            <motion.div
              key={item.name}
              className="rounded-xl overflow-hidden flex flex-col items-center justify-center bg-white"
              onClick={() => setActiveBusiness(item.name)}
              variants={itemVariants}
            >
              <div
                className={`w-full flex justify-center items-center p-5 ${
                  activeBusiness === item.name ? "bg-[#0e6cf6]" : "bg-white"
                }`}
              >
                <Image
                  src={item.img}
                  width={50}
                  height={50}
                  alt="business icon"
                />
              </div>
              <p className="border-t w-full text-center border-[#E7E7E8] text-[#10161D] pt-2">
                {item.name}
              </p>
              <p className="px-2 text-sm text-[#10161D] opacity-50 pb-2">
                (<span>{item.desc}</span>)
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="sm:mx-64 mx-5 my-9 bg-white rounded-xl overflow-hidden sm:w-[1100px] w-full h-min-[600px]"
          variants={itemVariants}
        >
          <div className="px-5 py-2 border-b border-[#E7E7E8] flex gap-3 items-center">
            <div>
              <Image
                src={"/core-icon.png"}
                height={5}
                width={15}
                alt="core icon"
              />
            </div>
            <span>{activeBusinessDialog?.name}</span>
          </div>
          <div className="flex sm:flex-row flex-col sm:items-center items-start justify-end w-full bg-[#e5f0fd] pl-5 pt-10">
            <motion.div
              className="flex flex-col w-96 p-5 sm:pl-20 pl-2"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-semibold text-[#0e6cf6]">
                {activeBusinessDialog?.head}
              </h2>
              <p className="text-[#0A1219] font-light sm:text-lg text-sm">
                {activeBusinessDialog?.des}
              </p>
            </motion.div>
            <motion.div
              className="flex-1 w-full flex items-center justify-end"
              variants={itemVariants}
            >
              <Image
                src={activeBusinessDialog?.img as string}
                width={700}
                height={100}
                alt="business dialog"
                className="w-[700px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      {/* key feature */}
      <section
        className="h-full w-full py-10 bg-white flex flex-col items-center justify-center"
        ref={menuItems[1].ref}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            KEY FEATURES
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Explore the <span className="text-[#0e6cf6]">Key Features</span>
          </h2>
        </div>

        <div className="sm:px-48 px-2 flex flex-col gap-4 items-center sm:max-w-[1302px] w-full  max-h-[1000px] justify-center">
          <div className="w-full sm:max-h-[239px] max-h-full sm:h-[239px] h-full flex sm:flex-row flex-col gap-4 items-center">
            <div className="relative sm:max-w-[600px] w-full sm:h-full h-[239px]  flex-1 rounded-xl overflow-hidden bg-gradient-to-tr to-[#0e6bf634] from-[#5350fe3a]">
              <div className="h-full flex flex-col items-start justify-center px-10 ">
                <h2 className="sm:text-4xl text-2xl text-[#0e6cf6] font-semibold ">
                  Expert-Led
                  <br />
                  Interviews
                </h2>
                <p className="text-[#0a1219a8] sm:text-sm sm:w-[300px] w-[150px] text-[10px] mb-5">
                  Every interview is conducted by an experienced interviewer,
                  ensuring a personal and tailored candidate experience.
                </p>
              </div>
              <div className="absolute top-0 w-full flex justify-end ">
                <Image
                  src={"/interview_key.png"}
                  width={500}
                  height={500}
                  alt={"bento image for key features"}
                />
              </div>
            </div>
            <div className="max-w-full sm:min-w-[300px] sm:w-[300px] w-full h-full bg-[#f4f7ff] rounded-xl p-5">
              <p className="text-[10px] text-center bg-[#0e6cf6] rounded-full text-white px-3 py-1 w-fit">
                KEY FEATURES
              </p>
              <h2 className="text-3xl font-semibold">
                AI-Powered
                <br />
                Post-Interview
                <br />
                <span className="flex items-center gap-2">
                  Analysis
                  <Image
                    src={"/group_icon.png"}
                    width={70}
                    height={20}
                    alt="group icon"
                  />
                </span>
              </h2>
              <p className="text-[#0a1219a8] text-sm w-[220px] ">
                AI-driven insights to evaluate interview performance, sentiment
                analysis, and detailed reporting.
              </p>
            </div>
          </div>
          <div className="w-full sm:max-h-[239px] max-h-full sm:h-[239px] h-full flex sm:flex-row flex-col gap-4 items-center">
            <div className="sm:max-w-[300px] max-w-full min-w-[250px] sm:w-[300px] w-full h-full bg-[#f4f7ff] rounded-xl px-10 py-9">
              <h2 className="text-3xl text-[#0e6cf6] font-semibold ">
                Automated
                <br />
                Interview
                <br />
                Scheduling
              </h2>
              <p className="text-[#0a1219a8] text-sm w-[250px] mt-2">
                Streamlines coordination between candidates and interviewers.
              </p>
            </div>
            <div className="max-w-[600px] h-full flex items-end  flex-1 rounded-xl overflow-hidden bg-[#0e6cf6] ">
              <div className="h-full flex flex-col items-start justify-center px-10 ">
                <Image
                  src={"/eye_icon.png"}
                  width={50}
                  height={50}
                  alt="eye icon"
                />
                <h2 className="sm:text-2xl text-lg text-white font-semibold ">
                  Real-Time Analytics
                  <br />& Reporting
                </h2>
                <p className="text-white sm:text-sm text-[10px] sm:w-[250px] w-fit mt-2">
                  Access detailed reports on candidate performance, with
                  insights backed by AI.
                </p>
              </div>
              <div className="w-full h-full flex flex-col items-end justify-end">
                <Image
                  src={"/live-key.png"}
                  width={500}
                  height={500}
                  alt="live exterview page"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full min-h-[150px] sm:px-28 px-2 items-center rounded-xl bg-gradient-to-tr to-[#0e6bf634] from-[#5350fe3a] flex">
            <div className="absolute bottom-0  sm:left-3 left-0">
              <Image
                src={"/mentor_key.png"}
                alt="mentorship image"
                width={220}
                height={200}
              />
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 justify-end items-end h-full w-full">
              <h2 className="sm:text-3xl text-lg text-[#0e6cf6] font-bold ml-0">
                Mentorship
                <br />
                Integration
              </h2>
              <p className="text-[#0a1219a8] sm:text-sm text-[10px] sm:w-[250px] w-[150px] sm:text-left text-right">
                Ongoing candidate development through mentor-led sessions,
                driving long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* workflow */}
      <section ref={menuItems[2].ref} className="h-full w-full py-10">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            STEPS
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            How does <br />
            <span className="text-[#0e6cf6]">exterview work</span>?
          </h2>

          <div className="sm:mx-56 mx-2 sm:w-[1200px] w-full rounded-xl overflow-hidden p-3 bg-white">
            <div className="bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] flex items-center justify-center pt-20 rounded-t-xl">
              <Image
                src={activeWorkImage?.img as string}
                alt="work image"
                width={900}
                height={600}
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center">
              <div
                className={`${
                  activeWork == "1"
                    ? "bg-[rgb(194,223,255)] border-[#0e6cf6] border-b-4"
                    : "bg-white border-zinc-200 border-b-2"
                } p-5`}
                onClick={() => setActiveWork("1")}
              >
                <p
                  className={`${
                    activeWork == "1"
                      ? "text-[#0072F5]  bg-[rgb(169,209,252)]"
                      : "text-[#222930] opacity-50 bg-[#dbdbdb]"
                  } rounded-full flex items-center justify-center p-2 w-10 h-10`}
                >
                  01
                </p>
                <h3
                  className={`${
                    activeWork == "1" ? "opacity-100" : "opacity-50"
                  }text=[#] font-normal`}
                >
                  Submit Your Requirements
                </h3>
                <p className="text-[#10161D] opacity-50 font-light">
                  Enter job details and candidate specifications into
                  Exterview’s system.
                </p>
              </div>
              <div
                className={`${
                  activeWork == "2"
                    ? "bg-[rgb(194,223,255)] border-[#0e6cf6] border-b-4"
                    : "bg-white border-zinc-200 border-b-2"
                } p-5`}
                onClick={() => setActiveWork("2")}
              >
                <p
                  className={`${
                    activeWork == "2"
                      ? "text-[#0072F5]  bg-[rgb(169,209,252)]"
                      : "text-[#222930] opacity-50 bg-[#dbdbdb]"
                  } rounded-full flex items-center justify-center p-2 w-10 h-10`}
                >
                  02
                </p>
                <h3
                  className={`${
                    activeWork == "2" ? "opacity-100" : "opacity-50"
                  }text=[#] font-normal`}
                >
                  Conduct Interviews with Experts
                </h3>
                <p className="text-[#10161D] opacity-50 font-light">
                  Schedule and conduct interviews with experienced
                  professionals, backed by AI-generated insights.
                </p>
              </div>
              <div
                className={`${
                  activeWork == "3"
                    ? "bg-[rgb(194,223,255)] border-[#0e6cf6] border-b-4"
                    : "bg-white border-zinc-200 border-b-2"
                } p-5`}
                onClick={() => setActiveWork("3")}
              >
                <p
                  className={`${
                    activeWork == "3"
                      ? "text-[#0072F5]  bg-[rgb(169,209,252)]"
                      : "text-[#222930] opacity-50 bg-[#dbdbdb]"
                  } rounded-full flex items-center justify-center p-2 w-10 h-10`}
                >
                  03
                </p>
                <h3
                  className={`${
                    activeWork == "3" ? "opacity-100" : "opacity-50"
                  }text=[#] font-normal`}
                >
                  Get Post-Interview Reports
                </h3>
                <p className="text-[#10161D] opacity-50 font-light">
                  Get AI analysis of candidate performance and skill
                  recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reports */}
      <section className="sm:h-[100vh] h-full flex sm:flex-row flex-col items-center justify-center gap-5 w-full py-10 bg-white">
        <div className="flex flex-col sm:items-start items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            REPORTS
          </p>
          <h2 className="text-3xl my-7 font-semibold">
            Unlock <span className="text-[#0e6cf6]">Insights</span> with <br />{" "}
            Comprehensive Report
          </h2>
          <p>
            End-to-end solutions for modern recruitment
            <br /> challenges, scaling your hiring processes with c<br />
            AI-driven technology
          </p>
          <Accordion type="single" collapsible className=" w-[400px] mt-5">
            {reportItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className=" border-[#0e6cf6] mb-2 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline  p-4 bg-transparent [&[data-state=open]]:bg-blue-100 [&[data-state=open]>div>span]:text-blue-500 [&[data-state=open]>div]:text-white">
                  <div className="flex items-center justify-start gap-2">
                    <Image
                      src={item.img}
                      height={20}
                      width={20}
                      alt={item.title}
                    />
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-blue-100">
                  <div className="p-4">{item.content}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <Image
            src={"/report.png"}
            width={700}
            height={700}
            alt={"report image with dashboard"}
          />
        </div>
      </section>
      {/* kPI */}
      <section className="sm:h-[100vh] h-full flex items-center justify-center w-full py-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            KPI NUMBERS
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Precision <span className="text-[#0e6cf6]">KPI Insights</span> for{" "}
            <br />
            Business Success
          </h2>

          <div className="sm:p-0 px-5 flex sm:flex-row flex-col gap-4 items-center justify-center sm:max-w-[1442px] max-w-full sm:max-h-[325px] max-h-full">
            {/* Left Column */}
            <div className="flex flex-col gap-4 flex-1 sm:min-w-[512px] min-w-full sm:max-h-[325px] max-h-full">
              {/* Top Row in Left Column */}
              <div className="flex gap-5 items-center sm:min-w-[412px] min-w-full h-[253px]">
                {/* Card 1 */}
                <div className="flex-1 h-full bg-gradient-to-tr to-[#0e6bf634] from-[#5350fe3a] rounded-xl p-5 flex flex-col items-start justify-center gap-2">
                  <h2 className="sm:text-6xl text-2xl font-semibold text-[#0e6cf6]">
                    10,000+
                  </h2>
                  <p className="flex items-center text-md gap-2 bg-white rounded-full w-fit px-3 py-1 font-semibold ml-14">
                    <span>
                      <Image
                        src={"/cursor.png"}
                        alt="play icon"
                        width={12}
                        height={12}
                      />
                    </span>
                    Interviews Conducted
                  </p>
                </div>

                {/* Card 2 */}
                <div className="sm:min-w-[165px] min-w-[60px] h-full bg-[#0072F5] rounded-xl flex flex-col items-start justify-end px-4 py-4">
                  <h2 className="text-4xl text-[#0072F5] font-semibold bg-white rounded-full px-2 py-1">
                    90%
                  </h2>
                  <p className="text-white font-semibold px-2 text-xl">
                    Clients <br />
                    Satisfaction
                  </p>
                </div>
              </div>

              {/* Bottom Row in Left Column */}
              <div className="sm:min-w-[512px] min-w-[200px] sm:w-[512px] w-full sm:h-[253px] h-full rounded-xl border overflow-hidden py-5 px-5 flex flex-col gap-4">
                <h2 className="text-4xl font-medium px-2">
                  <span className="text-[#0072F5] font-bold">20+</span>{" "}
                  Enterprise Clients
                </h2>
                <div className="flex justify-end">
                  <Image
                    src={"/client_kpi.png"}
                    width={450}
                    height={123}
                    alt="clients_kpis"
                    className="max-w-[595px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="min-w-[412px] h-[325px] min-h-[325px] flex-1 relative bg-gradient-to-tr to-[#0e6bf634] from-[#5350fe3a] rounded-xl">
              <div className="flex h-full flex-col justify-center">
                <h2 className="text-8xl font-bold px-5">10x</h2>
                <p className="text-2xl pl-10">
                  Faster Hiring
                  <br />
                  Process
                </p>
              </div>
              <div className="absolute top-0 -right-10">
                <Image
                  src={"/kpi_profile.png"}
                  width={812}
                  height={625}
                  alt="profile kpi's"
                  className="max-w-[400px] max-h-[325px] h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Clients */}
      <section className="h-full flex flex-col items-center w-full py-10 bg-white">
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
      </section>

      {/* savings */}
      <section className="h-full flex items-center w-full py-10 bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            SAVINGS
          </p>
          <h2 className="text-2xl sm:text-3xl my-4 font-semibold text-center px-4">
            Calculate the{" "}
            <span className="text-[#0e6cf6]">Value Of Exterview</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-8 lg:px-56">
            {/* Left Panel */}
            <div className="flex-1 bg-white p-6 sm:p-8 md:p-10 rounded-xl flex items-start flex-col justify-between w-full">
              <h2 className="text-xl sm:text-2xl mb-4">
                Enter your
                <br /> recruitment targets
              </h2>

              {/* Slider Inputs */}
              <div className="mb-6 w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Planned hires in the next{" "}
                  <span className="font-semibold">12 months</span>
                </label>
                <Slider
                  value={[plannedHires]}
                  min={1}
                  max={1000}
                  onValueChange={(value) => setPlannedHires(value[0])}
                  className=""
                  color="#ffff"
                />
              </div>

              <div className="mb-6 w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Number of applicants{" "}
                  <span className="font-semibold">per position</span>
                </label>
                <Slider
                  value={[applicantsPerPosition]}
                  min={5}
                  max={3000}
                  onValueChange={(value) => setApplicantsPerPosition(value[0])}
                />
              </div>

              <div className="mb-6 w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Average time spent on{" "}
                  <span className="font-semibold">screening candidates</span>
                </label>
                <Slider
                  value={[avgScreeningTime]}
                  min={5}
                  max={60}
                  onValueChange={(value) => setAvgScreeningTime(value[0])}
                />
              </div>

              {/* Before Text */}
              <div className="text-sm text-gray-600 p-4 flex gap-4 border-t">
                <span className="bg-gray-50 rounded-full border px-4 h-7 items-center flex">
                  Before
                </span>
                <div>
                  Your team will screen {plannedHires * applicantsPerPosition}{" "}
                  candidates across {plannedHires} positions, spending{" "}
                  {avgScreeningTime} minutes per candidate. That’s a total of{" "}
                  <span className="text-black font-semibold">
                    {totalManHour.toFixed(0)}{" "}
                    {totalManMin > 60 ? "hours" : "minutes"}
                  </span>{" "}
                  spent manually.
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 bg-[#0e6cf6] text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md flex items-start flex-col justify-between w-full">
              <h2 className="text-xl sm:text-2xl mb-4 text-start">
                Time you will save on
                <br /> candidate screening
              </h2>
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#0e6cf6] w-full bg-white rounded-full py-2 text-start px-5">
                - {Math.abs(Math.floor(savedHours))} hours
              </div>
              <h2 className="text-xl sm:text-2xl mb-4 text-start">
                Compared to current <br /> process over a year
              </h2>
              <div className="text-3xl sm:text-4xl font-bold text-[#0e6cf6] w-full bg-white rounded-full py-2 text-start px-5">
                {percentSaved}%
              </div>

              {/* After Text */}
              <div className="text-sm text-white border-[#ffffff4d] p-4 flex gap-4 border-t mt-5 text-start">
                <span className="bg-white text-[#0e6cf6] rounded-full border px-4 h-7 items-center flex">
                  After
                </span>
                <div>
                  You’ll spend ~5 minutes per position to create, ~5 minutes to
                  customize the AI, and ~{aiScreeningTime} hours per position to
                  review the results. Spending{" "}
                  {Math.abs(Math.floor(savedHours))} hours in total on
                  screening.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why */}
      <section className="sm:h-[100vh] h-full flex items-center w-full py-10 bg-white">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            WHY
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Why Companies Use <br />
            <span className="text-[#0e6cf6]">Exterview</span>
          </h2>

          <div className="sm:px-56 px-2">
            <Image
              src={"/why.png"}
              width={1440}
              height={600}
              alt={"bento image for key features"}
            />
          </div>
        </div>
      </section>
      {/* case studies */}
      <section
        ref={menuItems[3].ref}
        className="sm:h-[100vh] h-full flex items-center w-full py-10 "
      >
        <div className="flex flex-col items-center justify-center w-full">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            CASE STUDIES
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Get Updated with Industry Insights
          </h2>

          <div className="sm:px-56 px-2 w-full flex sm:flex-row flex-col items-center justify-center gap-5">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="max-w-[400px] overflow-hidden rounded-xl"
              >
                <div>
                  <Image
                    src={item.img}
                    width={350}
                    height={290}
                    alt="study"
                    className="hover:scale-105 transition duration-200"
                  />
                </div>
                <div className="p-2 w-[350px] flex flex-col items-start justify-center gap-1">
                  <p className="text-[#0A1219] opacity-45 font-thin text-sm">
                    SAVINGS
                  </p>
                  <h4 className="font-semibold text-[#393F45] text-xl">
                    {item.title}
                  </h4>
                  <p className="text-[#0A1219] opacity-45 font-thin text-sm">
                    {item.desc}
                  </p>
                  <a className="font-light text-sm text-[#393F45] flex items-center gap-1">
                    Learn More
                    <span>
                      <MoveRightIcon className="text-[#0e6cf6] h-5 w-5" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Faq's */}
      <section className="sm:h-[100vh] h-full sm:py-0 py-10 flex items-center w-full bg-white">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            FAQ&apos;S
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Popular Questions
          </h2>

          <div className="w-full sm:px-56 px-2">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border border-gray-200 rounded-xl mb-2 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline hover:px-6  transition-all duration-200 p-4 bg-white [&[data-state=open]>div]:bg-blue-500 [&[data-state=open]]:bg-blue-100 [&[data-state=open]>span]:text-blue-500 [&[data-state=open]>div]:text-white">
                    <span>{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-blue-100">
                    <div className="p-4">{item.content}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* request a demo */}
      <section className="w-full flex flex-col py-28 gap-10 items-center justify-center bg-black">
        <h1 className="text-white text-5xl text-center">
          Ready to revolutionize <br /> your{" "}
          <span className="text-[#0e6cf6] ">hiring process</span>?
        </h1>
        <button
          data-layername="bookADemo"
          className="px-8 py-2 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full"
          onClick={() => scrollToSection(menuItems[4].ref)}
        >
          Request a demo
        </button>
      </section>
      {/* footer */}
      <section
        ref={menuItems[4].ref}
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
          <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3">
            <FaPhoneVolume />
            +91 9111 4851 04
          </button>
          <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3">
            <MdOutlineAlternateEmail />
            info.exterview.io
          </button>
          <p>Copyright © 2024 — exterview</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold">Quick Links</h2>
          <a className="font-light">Home</a>
          <a className="font-light">Pricing</a>
          <a className="font-light">Book a Demo</a>
          <a className="font-light">Contact Us</a>
          <a className="font-light">Privacy Policty</a>
          <a className="font-light">Terms of Service</a>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-semibold">Social</h2>
          <p className="font-light">Facebook</p>
          <p className="font-light">Instagram</p>
          <p className="font-light">Twitter</p>
        </div>
      </section>
    </div>
  );
}
