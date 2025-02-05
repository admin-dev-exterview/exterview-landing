import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CaseStudies() {
  const router = useRouter();
  const caseStudies = [
    {
      img: "/study_1.png",
      title: "Best Practices for Conducting a Virtual Interview for HR Teams",
      desc: "As remote work and digital hiring become more prevalent, conducting virtual interviews has become an essential skill for HR teams.",
    },
    {
      img: "/study_2.png",
      title: "How Interview-as-a-Service Helps in Scaling Tech Teams",
      desc: "Interview-as-a-Service (IaaS) platforms revolutionize the hiring process by outsourcing initial technical interviews.",
    },
    {
      img: "/study_3.png",
      title:
        "Interviewing Gen Z: Adapting Virtual Interview Techniques for a New Generation",
      desc: "As the first generation to grow up fully immersed in technology, Gen Z brings unique qualities, skills, and expectations to the workforce.",
    },
  ];
  return (
    <section className="sm:h-full md:h-full h-full flex items-center w-full pt-20 sm:px-0 px-5">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            CASE STUDIES
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            Get Updated with Industry Insights
          </h2>
        </div>

        <div className="sm:px-36 pt-10 px-0 w-full flex sm:flex-row flex-wrap  flex-col items-center justify-center gap-5">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="max-w-[340px] sm:min-h-[650px] rounded-xl"
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={item.img}
                  width={350}
                  height={290}
                  alt="study"
                  className="hover:scale-105 transition duration-200"
                />
              </div>
              <div className="py-2 w-[350px] h-full min-h-[220px] flex flex-col items-start justify-between gap-1">
                <div className="flex flex-col ">
                  <p className="text-[#0A1219] mb-2 font-semibold opacity-45  text-[12px]">
                    SAVINGS
                  </p>
                  <h4 className="font-bold text-[#393F45] text-lg">
                    {item.title}
                  </h4>
                  <p className="text-[#0A1219] opacity-45 font-thin text-sm">
                    {item.desc}
                  </p>
                </div>

                <a
                  className="font-light text-[12px] text-[#393F45] flex items-center gap-2"
                  onClick={() => router.push(`/blog/${index + 1}`)}
                >
                  Learn More
                  <span>
                    <MoveRightIcon className="text-[#0e6cf6] h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
