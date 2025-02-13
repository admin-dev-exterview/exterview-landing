import { useState } from "react";
import { Slider } from "./ui/slider";

function SavingCalculator() {
  const [plannedHires, setPlannedHires] = useState(24);
  const [applicantsPerPosition, setApplicantsPerPosition] = useState(200);
  const [avgScreeningTime, setAvgScreeningTime] = useState(15);

  const totalManMin = plannedHires * applicantsPerPosition * avgScreeningTime;

  const totalManHour = totalManMin > 60 ? totalManMin / 60 : totalManMin;
  const totalManHourCal = totalManMin > 60 ? totalManMin / 60 : 1;

  const aiScreeningTime = 5;
  const totalAiHours =
    (plannedHires * applicantsPerPosition * aiScreeningTime) / 60;

  const savedHours = totalManHourCal - totalAiHours;
  const percentSaved = ((savedHours / totalManHourCal) * 100).toFixed(2);
  return (
    <section className="h-full flex items-center w-full py-10 sm:px-0 px-5">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            SAVINGS
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            Calculate the{" "}
            <span className="text-[#0e6cf6]">Value Of Exterview</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 p-4 h-full sm:px-72 px-0 min-h-[600px] max-h-1/2">
          {/* Left Panel */}
          <div className="flex-1 bg-white  rounded-3xl flex items-start flex-col space-y-12 w-full">
            <div className="sm:p-6 p-4 border-b w-full">
              <h2 className="text-xl sm:text-3xl font-bold">
                Enter your
                <br /> recruitment targets
              </h2>
            </div>

            {/* Slider Inputs */}
            <div className="my-10 w-full px-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm">
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

            <div className="mb-10 w-full px-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm">
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

            <div className="mb-10 w-full px-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm">
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
            <div className="text-sm text-gray-600 sm:p-6 p-4 flex gap-4 border-t">
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
          <div className="flex-1 bg-[#0e6cf6] text-white  rounded-3xl  shadow-md flex items-start flex-col  w-full space-y-12">
            <div className="sm:p-6 p-4 border-b w-full">
              <h2 className="text-xl sm:text-3xl font-bold">
                Time you will save on
                <br /> candidate screening
              </h2>
            </div>
            <div className="text-4xl font-bold text-white w-full py-1  px-6 text-center">
              - {Math.abs(Math.floor(savedHours))} hours
            </div>
            <h2 className="text-xl font-medium sm:text-xl mb-4 px-6 ">
              Compared to current process over a year
            </h2>
            <div className="text-6xl sm:text-7xl font-bold text-white w-full text-center px-5">
              {percentSaved}%
            </div>

            {/* After Text */}
            <div className="text-sm text-white border-[#ffffff4d] p-6 flex gap-4 border-t mt-5 text-start">
              <span className="bg-white text-[#0e6cf6] rounded-full border px-4 h-7 items-center flex">
                After
              </span>
              <div>
                You’ll spend ~5 minutes per position to create, ~5 minutes to
                customize the AI, and ~{aiScreeningTime} hours per position to
                review the results. Spending {Math.abs(Math.floor(savedHours))}{" "}
                hours in total on screening.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavingCalculator;
