import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="sm:h-full md:h-full h-full flex items-center w-full py-20 sm:px-0 px-5">
      <div className="flex flex-col items-center justify-center w-full sm:gap-10 gap-4">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            Insights
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            Get Updated with Industry Insights
          </h2>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 items-center sm:px-40 px-0">
          <div className="w-1/2">
            <Image
              src="/casestudy_1.png"
              width={350}
              height={290}
              alt="study"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-1/2 space-y-6">
            <p className="text-[#0e6cf6] text-[12px] font-semibold">
              INNOVATION TECHNOLOGY
            </p>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                How we are making this happen?
              </h2>
              <p className="text-[14x]">
                The year is 2025. The world is abuzz with technological
                advancements, and artificial intelligence (AI) is at the
                forefront of this revolution. The future of hiring is here, and
                it&apos;s called Samaya.
              </p>
            </div>

            <Link
              href="/blog/1"
              className="flex font-semibold items-center gap-2 text-lg hover:underline transition-all duration-300 ease-in-out hover:text-[#0e6cf6]"
            >
              Read More{" "}
              <span>
                <MoveRightIcon className="text-[#0e6cf6] h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
