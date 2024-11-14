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
import {
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Slider } from "@/components/ui/slider";

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
    // Change image every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 50000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative bg-[#f3f8fe] text-zinc-950">
      {/* header */}
      <header className="flex justify-between items-center py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <nav
          data-layername="menu"
          className="flex overflow-hidden flex-wrap gap-5 justify-between px-7 py-2 w-full rounded-2xl border border-solid bg-white bg-opacity-80 border-neutral-900 border-opacity-10 max-md:px-5 max-md:max-w-full"
        >
          <Image
            //   loading="lazy"
            src={"/logo.png"}
            alt="Exterview logo"
            width={180}
            height={40}
            className="object-contain shrink-0 my-auto max-w-full p-2"
          />
          <div className="flex flex-wrap gap-3.5 max-md:max-w-full">
            <div className="flex flex-wrap flex-auto items-center text-neutral-900 text-opacity-40 max-md:max-w-full">
              {menuItems.map((item) => (
                <div
                  key={item.layerName}
                  data-layername={item.layerName}
                  className="gap-2.5 self-stretch px-7 py-1 my-auto whitespace-nowrap max-md:px-5 hover:text-black transition-colors duration-300 ease-in-out cursor-pointer"
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <button
              data-layername="bookADemo"
              className="px-8 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full"
              onClick={() => scrollToSection(menuItems[4].ref)}
            >
              Book a demo
            </button>
          </div>
        </nav>
      </header>
      {/* hero */}
      <section ref={menuItems[0].ref} className="h-screen w-full">
        <div className="flex w-full gap-10 justify-center items-center px-28 mt-20">
          <div>
            <p className="flex gap-1 items-center mb-2">
              <IoStar className="text-[#0e6cf6]" />
              <IoStar className="text-[#0e6cf6]" />
              <IoStar className="text-[#0e6cf6]" />
              <IoStar className="text-[#0e6cf6]" />
              <IoStar className="text-[#0e6cf6]" />
              <span className="ml-1 text-[#10161D] opacity-50">
                Trusted by Clients
              </span>
            </p>
            <h1 className="text-7xl font-semiboldbold">
              Next-Gen <br />
              <span className="text-[#0e6cf6]">Recruitment</span>
              <br /> with Exterview
            </h1>
            <p className="text-xl text-[#10161D] opacity-50 leading-tight my-2 mb-5">
              Real-time insights and automation for modern
              <br />
              recruitment, with experienced interviewers driving
              <br />
              every hiring decision.
            </p>
            <div className="flex gap-5">
              <button
                data-layername="bookADemo"
                className="px-8 py-3 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full"
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
          <div>
            <Image
              src={images[imageIndex]}
              alt="hero page image"
              width={626}
              height={525}
              className="w-[626px] w-max-[626px]"
            />
          </div>
        </div>
      </section>
      {/* video */}
      <section ref={videoRef} className="relative h-screen w-full">
        <Image
          src={"/section_2.png"}
          alt="section 2 backgroud"
          width={1440}
          height={600}
          className="w-full h-screen object-cover"
        />
        <div className="absolute translate-x-1/2 -translate-y-1/2 top-1/2">
          <Image
            src={"/video_banner.png"}
            alt="video component"
            width={800}
            height={400}
          />
        </div>
      </section>
      {/* business model */}
      <section className="h-full w-full py-10">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            BUSINESS MODULES
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Take your business to the global <br /> forefront with{" "}
            <span className="text-[#0e6cf6]">Exterview</span>
          </h2>
          <div className="flex w-full gap-10 items-center justify-center">
            {business.map((item) => (
              <div
                key={item.name}
                className="rounded-xl overflow-hidden flex flex-col items-center justify-center bg-white"
                onClick={() => setActiveBusiness(item.name)}
              >
                <div
                  className={` w-full flex justify-center items-center p-5 ${
                    activeBusiness === item.name ? "bg-[#0e6cf6]" : "bg-white"
                  }`}
                >
                  <Image src={item.img} width={50} height={50} alt="raas" />
                </div>
                <p className="border-t w-full text-center border-[#E7E7E8] text-[#10161D] pt-2">
                  {item.name}
                </p>
                <p className="px-2 text-sm text-[#10161D] opacity-50 pb-2">
                  (<span>{item.desc}</span>)
                </p>
              </div>
            ))}
          </div>
          <div className="mx-64 my-9 bg-white rounded-xl overflow-hidden w-[1100px] h-min-[600px]">
            <div className="px-5 py-2 border-b border-[#E7E7E8] flex gap-3 items-center">
              <div className="">
                <Image
                  src={"/core-icon.png"}
                  height={5}
                  width={15}
                  alt="core icon"
                />
              </div>
              <span>{activeBusinessDialog?.name}</span>
            </div>
            <div className="flex items-center justify-end w-full bg-[#e5f0fd] pl-5 pt-10">
              <div className="flex flex-col w-96 p-5 pl-20">
                <h2 className="text-4xl font-semibold text-[#0e6cf6]">
                  {activeBusinessDialog?.head}
                </h2>
                <p className="text-[#0A1219] font-light">
                  {activeBusinessDialog?.des}
                </p>
              </div>
              <div className="flex-1 w-full flex items-center justify-end">
                <Image
                  src={activeBusinessDialog?.img as string}
                  width={700}
                  height={100}
                  alt="raas"
                  className="w-[700px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* key feature */}
      <section ref={menuItems[1].ref} className="h-full w-full py-10 bg-white">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            KEY FEATURES
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Explore the <span className="text-[#0e6cf6]">Key Features</span>
          </h2>

          <div className="px-56">
            <Image
              src={"/key_features.png"}
              width={1440}
              height={600}
              alt={"bento image for key features"}
            />
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

          <div className="mx-56 w-[1200px] rounded-xl overflow-hidden p-3 bg-white">
            <div className="bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] flex items-center justify-center pt-20 rounded-t-xl">
              <Image
                src={activeWorkImage?.img as string}
                alt="work image"
                width={900}
                height={600}
              />
            </div>
            <div className="flex items-center justify-center">
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
      <section className="h-screen flex items-center justify-center gap-5 w-full py-10 bg-white">
        <div className="flex flex-col items-start justify-center">
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
      <section className="h-screen flex items-center w-full py-10 ">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            KPI NUMBERS
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Precision <span className="text-[#0e6cf6]">KPI Insights</span> for{" "}
            <br />
            Business Success
          </h2>

          <div className="px-56">
            <Image
              src={"/kpi.png"}
              width={1440}
              height={600}
              alt={"bento image for key features"}
            />
          </div>
        </div>
      </section>
      {/* Clients */}
      <section className=" flex items-center w-full py-10 bg-white">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            OUR CLIENTS
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Trusted by{" "}
            <span className="text-[#0e6cf6]">
              Organizations big and <br /> small,around the world
            </span>
          </h2>

          <div className="w-full overflow-hidden my-10">
            <Image
              src={"/clients.png"}
              width={3440}
              height={200}
              alt={"clients logos"}
            />
          </div>

          <div className="bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] w-full flex items-center justify-between py-20 my-10">
            <h3 className="text-center w-[300px] text-white font-bold text-4xl">
              Trusted by
            </h3>
            <div className=" w-[1000px] bg-white px-2 py-10 rounded-l-full overflow-hidden ">
              <Image
                src={"/clients.png"}
                width={1440}
                height={200}
                alt={"clients logos"}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-20 my-10 mb-10">
            <div>
              <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm w-36">
                OUR CLIENTS
              </p>
              <h2 className="text-3xl my-7 font-semibold text-center">
                Trusted by{" "}
                <span className="text-[#0e6cf6]">
                  Organizations big and <br /> small,around the world
                </span>
              </h2>
            </div>
            <div>
              <Image
                src={"/client-2.png"}
                width={440}
                height={200}
                alt={"clients logos"}
              />
            </div>
          </div>
        </div>
      </section>
      {/* savings */}
      <section className="h-screen flex items-center w-full py-10 ">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            SAVINGS
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Calculate the{" "}
            <span className="text-[#0e6cf6]">Value Of Exterview</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 p-8 px-56">
            {/* Left Panel */}
            <div className="flex-1 bg-white p-10 rounded-xl flex items-start flex-col justify-between w-full">
              <h2 className="text-2xl mb-4">
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
                {/* <div className="text-right text-gray-700 mt-2">
                  {plannedHires}
                </div> */}
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
                {/* <div className="text-right text-gray-700 mt-2">
                  {applicantsPerPosition}
                </div> */}
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
                {/* <div className="text-right text-gray-700 mt-2">
                  {avgScreeningTime} min
                </div> */}
              </div>

              {/* Before Text */}
              <div className="text-sm text-gray-600 p-4 flex gap-5 border-t">
                <span className="bg-gray-50 rounded-full border px-4 h-7 items-center flex">
                  Before
                </span>{" "}
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
            <div className="flex-1 bg-[#0e6cf6] text-white p-10 rounded-lg shadow-md text-center flex items-start gap-4 flex-col justify-between">
              <h2 className="text-2xl mb-4 text-start">
                Time you will save on
                <br /> candidate screening
              </h2>
              <div className="text-4xl font-bold mb-2 text-[#0e6cf6] w-full bg-white rounded-full py-2 text-start px-5">
                - {Math.abs(Math.floor(savedHours))} hours
              </div>
              <h2 className="text-2xl mb-4 text-start">
                Compared to current <br /> process over a year
              </h2>
              <div className="text-4xl font-bold text-[#0e6cf6] w-full bg-white rounded-full py-2 text-start px-5">
                {percentSaved}%
              </div>

              {/* After Text */}
              <div className="text-sm text-white border-[#ffffff4d] p-4 flex gap-5 border-t mt-5 text-start">
                <span className="bg-white text-[#0e6cf6] rounded-full border px-4 h-7 items-center flex">
                  After
                </span>{" "}
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
      <section className="h-screen flex items-center w-full py-10 bg-white">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            WHY
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Why Companies Use <br />
            <span className="text-[#0e6cf6]">Exterview</span>
          </h2>

          <div className="px-56">
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
        className="h-screen flex items-center w-full py-10 "
      >
        <div className="flex flex-col items-center justify-center w-full">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            CASE STUDIES
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Get Updated with Industry Insights
          </h2>

          <div className="px-56 w-full flex items-center justify-center gap-5">
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
      <section className="h-screen flex items-center w-full bg-white">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="bg-white border px-5 py-2 rounded-full text-[#0e6cf6] text-sm">
            FAQ&apos;S
          </p>
          <h2 className="text-3xl my-7 font-semibold text-center">
            Popular Questions
          </h2>

          <div className="w-full px-56">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border border-gray-200 rounded-md mb-2 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline p-4 bg-white [&[data-state=open]>div]:bg-blue-500 [&[data-state=open]]:bg-blue-100 [&[data-state=open]>span]:text-blue-500 [&[data-state=open]>div]:text-white">
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
        className="relative h-screen flex gap-5 flex-col items-start justify-center px-10 w-full bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] overflow-hidden text-white "
      >
        <div className="absolute top-0 left-0 object-cover">
          <Image src={"/footer-bg.png"} width={1900} height={1000} alt="bg" />
        </div>
        <div className="z-10">
          <Image
            src={"/white-logo.png"}
            width={220}
            height={70}
            alt="white logo"
          />
        </div>
        <div className="flex items-center justify-center gap-10 z-10 w-full">
          <div className="max-w-[754px] w-full border border-[#278CFF] p-10 rounded-xl flex flex-col items-start gap-4">
            <h4 className="flex items-center gap-1 text-3xl font-semibold">
              <span>
                <Image src={"/logo-f.png"} width={20} height={20} alt="logo" />
              </span>
              Contact Form
            </h4>
            <div className="flex w-full gap-5 items-center justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-[#278CFF] bg-transparent placeholder:text-[#ffffff3d] w-full p-2 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-[#278CFF] bg-transparent placeholder:text-[#ffffff3d] w-full p-2 outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Business Email"
              className="border-b border-[#278CFF] bg-transparent placeholder:text-[#ffffff3d] w-full p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Job Function"
              className="border-b border-[#278CFF] bg-transparent placeholder:text-[#ffffff3d] w-full p-2 outline-none"
            />
            <input
              type="number"
              placeholder="+91 00000 00000"
              className="border-b border-[#278CFF] bg-transparent placeholder:text-[#ffffff3d] w-full p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Reason for contact us"
              className="border-b border-[#278CFF] placeholder:text-[#ffffff3d] bg-transparent w-full p-2 outline-none"
            />
            <div className="w-full flex justify-center">
              <button className="bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full p-2">
                Contact Us
              </button>
            </div>
          </div>
          <div className="max-w-[424px] flex flex-col gap-10 items-center justify-center">
            <div className="border border-[#278CFF] rounded-xl p-5 flex flex-col gap-2 h-[200px]">
              <h4 className="font-bold text-xl">Join our Newsletter</h4>
              <div className="flex border-b border-white items-center justify-between">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent text-white border-none outline-none  placeholder:text-[#ffffff3d]"
                />
                <MoveRightIcon className="bg-[#3080f7ae] text-white rounded-2xl h-10 w-10 px-2" />
              </div>
              <p className="text-sm font-extralight">
                By clicking “sign up” you agree to receive emails from exterview
                and accept our web terms of use and privacy and cookie policy.
              </p>
            </div>
            <div className="max-w-[654px] flex items-center justify-center gap-10 h-[200px]">
              <div className="max-w-[300px] border border-[#278CFF] rounded-xl p-5 h-full flex-col flex items-start justify-between">
                <h4 className="flex items-center gap-1">
                  <span>
                    <Image
                      src={"/logo-f.png"}
                      width={10}
                      height={10}
                      alt="logo"
                    />
                  </span>
                  Home
                </h4>
                <p className="text-white opacity-65 font-light text-sm">
                  Project Overview
                </p>
                <p className="text-white opacity-65 font-light text-sm">Blog</p>
                <p className="text-white opacity-65 font-light text-sm">
                  FAQ&apos;S
                </p>
                <p className="text-white opacity-65 font-light text-sm">
                  Case Studies
                </p>
                <p className="text-white opacity-65 font-light text-sm">
                  Contact Us
                </p>
              </div>
              <div className="max-w-[357px] flex flex-col gap-5 items-center border border-[#278CFF] rounded-xl p-5 h-full ">
                <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3">
                  <FaPhoneVolume />
                  +91 9111 4851 04
                </button>
                <button className="flex gap-3 items-center border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3">
                  <MdOutlineAlternateEmail />
                  info.exterview.io
                </button>
                <div className="flex gap-5 items-center">
                  <button>
                    <FaFacebook className=" border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3 w-10 h-10" />
                  </button>
                  <button>
                    <FaTwitter className=" border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3 w-10 h-10" />
                  </button>
                  <button>
                    <FaInstagram className=" border border-[#278CFF] bg-[#0061DD] rounded-full p-2 px-3 w-10 h-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 w-full border-t border-white flex items-center justify-between text-sm pt-2 mt-5">
          <p>Copyright © 2024 — exterview</p>
          <div className="flex items-center gap-5">
            <p>Privacy Statement</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </section>
    </div>
  );
}
