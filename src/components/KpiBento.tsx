import Image from "next/image";

function KpiBento() {
  return (
    <section className="sm:h-full md:h-full h-full sm:px-0 px-5 flex items-center justify-center w-full py-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            KPI NUMBERS
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            Precision <span className="text-[#0e6cf6]">KPI Insights</span> for{" "}
            <br />
            Business Success
          </h2>
        </div>

        <div className=" flex sm:flex-row flex-col gap-4 items-center justify-center sm:max-w-[1442px] max-w-full sm:max-h-[325px] max-h-full">
          {/* Left Column */}
          <div className="flex flex-col gap-4 items-center flex-1 sm:min-w-[512px] min-w-full sm:max-h-[325px] max-h-full">
            {/* Top Row in Left Column */}
            <div className="flex sm:flex-row flex-col gap-5 items-center sm:min-w-[412px] min-w-full h-[253px]">
              {/* Card 1 */}
              <div className="flex-1 min-w-[50vh] sm:min-w-0 h-full bg-gradient-to-tr to-[#0e6bf634] from-[#5350fe3a] rounded-xl p-5 flex flex-col items-start justify-center gap-2">
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
              <div className="sm:min-w-[165px] min-w-[50vh] h-full bg-[#0072F5] rounded-xl flex flex-col items-start justify-end px-4 py-4">
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
            <div className="sm:min-w-[512px] min-w-[50vh] sm:w-[512px] w-[40vh] sm:h-[253px] h-full rounded-xl border overflow-hidden py-5 mt-5 px-5 flex flex-col gap-4">
              <h2 className="sm:text-4xl text-xl font-medium px-2">
                <span className="text-[#0072F5] font-bold">20+</span> Enterprise
                Clients
              </h2>
              <div className="flex justify-end">
                <Image
                  src={"/client_kpi.png"}
                  width={450}
                  height={123}
                  alt="clients_kpis"
                  className="sm:max-w-[595px] max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="sm:min-w-[412px] min-w-[50vh] h-[325px] min-h-[325px] flex-1 relative bg-gradient-to-tr to-[#0e6bf634] from-[#5350fe3a] rounded-xl">
            <div className="flex h-full flex-col justify-center z-50">
              <h2 className="sm:text-8xl text-4xl font-bold px-5 z-50 sm:mt-0 mt-16">
                10x
              </h2>
              <p className="text-2xl sm:pl-10 pl-5 z-50">
                Faster Hiring
                <br />
                Process
              </p>
            </div>
            <div className="absolute top-0 sm:-right-10 -right-20 z-0">
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
  );
}

export default KpiBento;
