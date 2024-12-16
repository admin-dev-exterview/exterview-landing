import Image from "next/image";
import { useState } from "react";

const workImage = [
  { id: "1", img: "/work_1.png" },
  { id: "2", img: "/work_2.png" },
  { id: "3", img: "/work_3.png" },
];
function WorkFlow() {
  const [activeWork, setActiveWork] = useState("1");
  const activeWorkImage = workImage.find((item) => item.id === activeWork);
  return (
    <section className="h-full w-full py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            STEPS
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            How does <br />
            <span className="text-[#0e6cf6]">exterview work</span>?
          </h2>
        </div>

        <div className="sm:mx-36 mx-2 sm:w-[1100px] w-full rounded-xl overflow-hidden p-3 bg-white">
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
                } rounded-full font-bold text-sm flex items-center justify-center p-2 w-10 h-10`}
              >
                01
              </p>
              <h3
                className={`${
                  activeWork == "1" ? "opacity-100" : "opacity-50"
                } text-lg font-bold`}
              >
                Submit Your Requirements
              </h3>
              <p className="text-[#10161D] opacity-50 font-normal text-[12px]">
                Enter job details and candidate specifications into Exterview’s
                system.
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
                } rounded-full font-bold text-sm flex items-center justify-center p-2 w-10 h-10`}
              >
                02
              </p>
              <h3
                className={`${
                  activeWork == "2" ? "opacity-100" : "opacity-50"
                } text-lg font-bold`}
              >
                Conduct Interviews with Experts
              </h3>
              <p className="text-[#10161D] opacity-50 font-normal text-[12px]">
                Schedule and conduct interviews with experienced professionals,
                backed by AI-generated insights.
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
                } rounded-full font-bold text-sm flex items-center justify-center p-2 w-10 h-10`}
              >
                03
              </p>
              <h3
                className={`${
                  activeWork == "3" ? "opacity-100" : "opacity-50"
                } text-lg font-bold`}
              >
                Get Post-Interview Reports
              </h3>
              <p className="text-[#10161D] opacity-50 font-normal text-[12px]">
                Get AI analysis of candidate performance and skill
                recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkFlow;
