import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function Faq() {
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
  return (
    <section className="sm:h-[100vh] md:h-full sm:pb-10 h-full sm:px-0 px-5 sm:py-0 py-10 flex items-center bg-[#f3f8fe] w-full ">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            FAQ
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            Popular Questions
          </h2>
        </div>

        <div className="w-full mt-5 sm:px-80 px-0">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-gray-200 rounded-xl mb-2 overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline hover:px-6 font-bold text-lg  transition-all duration-200 p-4 bg-white [&[data-state=open]>div]:bg-blue-500 [&[data-state=open]]:bg-blue-100 [&[data-state=open]>span]:text-blue-500 [&[data-state=open]>div]:text-white">
                  <span>{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-blue-100 sm:pr-20 pr-0 font-Manrope text">
                  <div className="p-4">{item.content}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
