import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { refundData } from "@/config/refund";

function Page() {
  return (
    <div className="bg-[#f3f8fe] font-Manrope">
      <Header />
      <div className="bg-[#f3f8fe] text-zinc-950 font-Manrope w-full p-20">
        {/* Title (h1) */}
        <h1 className="text-6xl font-bold text-center py-5">
          {refundData.title}
        </h1>
        <p>{refundData.para}</p>

        {/* Categories (h2 and their content) */}
        {refundData.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-4xl font-bold  py-5">{category.category}</h2>

            {/* Subtitles (h3) under each category */}
            {category.subtitles.map(
              (
                sub: { subtitle?: string; paragraphs?: string },
                subtitleIndex
              ) => (
                <div key={subtitleIndex}>
                  {sub?.subtitle && (
                    <h3 className="text-2xl font-bold  py-5">
                      {sub?.subtitle}
                    </h3>
                  )}

                  <p>{sub.paragraphs}</p>
                </div>
              )
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
