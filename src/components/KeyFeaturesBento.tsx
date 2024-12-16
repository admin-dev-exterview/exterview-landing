import Image from "next/image";

function KeyFeaturesBento() {
  return (
    <section className="h-full w-full py-10  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
          KEY FEATURES
        </p>
        <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
          Explore the <span className="text-[#0e6cf6]">Key Features</span>
        </h2>
      </div>

      <div className="sm:px-48  px-2 flex flex-col gap-4 items-center sm:max-w-[1302px] w-full  max-h-[1000px] justify-center">
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
          <div className="sm:max-w-[300px] max-w-full min-w-[250px] sm:w-[300px] w-full h-full bg-white rounded-xl px-10 py-9">
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
                Access detailed reports on candidate performance, with insights
                backed by AI.
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
              Ongoing candidate development through mentor-led sessions, driving
              long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeaturesBento;
