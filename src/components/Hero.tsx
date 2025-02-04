import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoStar } from "react-icons/io5";

function Hero() {
  const router = useRouter();
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // Array to hold the image sources
  const images = ["/landing_1.png", "/landing_2.png", "/landing_3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);
  return (
    <motion.section
      ref={ref}
      className="sm:h-[80vh] h-full w-full"
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
              <span className="ml-1 text-[#10161D] opacity-50 text-[12px]">
                Trusted by Clients
              </span>
            </p>
            <h1 className="sm:text-7xl text-5xl font-semibold ">
              Next-Gen <br />
              <span className="text-[#0e6cf6]">Recruitment</span>
              <br /> with Exterview
            </h1>
            <p className="sm:text-lg text-lg text-[#10161D] opacity-50 leading-tight my-2 mb-5 font-light pl-2">
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
                onClick={() => router.push("/booking")}
              >
                Book a demo
              </button>
              {/* <button
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
                </button> */}
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
  );
}

export default Hero;
