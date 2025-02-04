import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

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

function BusinessModule() {
  const [activeBusiness, setActiveBusiness] = useState("Raas");
  const businessRef = useRef(null);
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

  const activeBusinessDialog = businessDialog.find(
    (item) => item.name === activeBusiness
  );
  return (
    <motion.section
      ref={businessRef}
      className="h-full w-full py-20 items-center justify-center flex flex-col"
      initial="hidden"
      animate={businessInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={itemVariants}
      >
        <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
          BUSINESS MODULES
        </p>
        <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
          Take your business to the global <br /> forefront with{" "}
          <span className="text-[#0e6cf6]">Exterview</span>
        </h2>
      </motion.div>

      <motion.div
        className="flex w-full sm:gap-10 gap-3 items-center justify-between sm:px-52  px-2"
        variants={containerVariants}
      >
        {business.map((item) => (
          <motion.div
            key={item.name}
            className="rounded-xl w-full overflow-hidden flex flex-col items-center justify-center bg-white max-w-[160px] min-h-32"
            onClick={() => setActiveBusiness(item.name)}
            variants={itemVariants}
          >
            <div
              className={` h-full w-full min-h-24 ${
                activeBusiness === item.name ? "bg-[#0e6cf6]" : "bg-white"
              }`}
            >
              <div
                className={`w-full flex justify-center items-center sm:p-5 p-3 `}
              >
                <Image
                  src={item.img}
                  width={50}
                  height={50}
                  alt="business icon"
                  className="w-auto max-h-[60px] object-cover"
                />
              </div>
            </div>
            <p className="border-t w-full sm:text-lg text-sm font-bold text-center border-[#E7E7E8] text-[#10161D] sm:pt-2 pt-1">
              {item.name}
            </p>
            <p className="px-2 sm:text-[12px] text-[8px] text-[#10161D] opacity-50 pb-2">
              (<span>{item.desc}</span>)
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="sm:mx-64 md:mx-5 mx-5 my-9 bg-white rounded-xl  overflow-hidden sm:w-[1100px]  w-full h-min-[600px]"
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
            <h2 className="text-4xl font-bold text-[#0e6cf6]">
              {activeBusinessDialog?.head}
            </h2>
            <p className="text-[#0A1219] font-light sm:text-sm text-sm">
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
  );
}

export default BusinessModule;
