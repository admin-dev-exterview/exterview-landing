import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
function Report() {
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
  return (
    <section className="sm:h-[100vh] md:h-full md:px-52 h-full flex sm:flex-row flex-col items-center justify-center gap-5 w-full py-20 ">
      <div className="flex flex-col sm:items-start items-center justify-center px-2">
        <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
          REPORTS
        </p>
        <h2 className="sm:text-5xl text-3xl my-7 font-bold text-start">
          Unlock <span className="text-[#0e6cf6]">Insights</span> with <br />{" "}
          Comprehensive Report
        </h2>
        <p className="text-sm pl-1">
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
                <div className="flex items-center justify-start gap-2 text-lg font-bold">
                  <Image
                    src={item.img}
                    height={20}
                    width={20}
                    alt={item.title}
                  />
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-blue-100 text-sm pr-5">
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
  );
}

export default Report;
