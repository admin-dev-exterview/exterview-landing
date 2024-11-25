import { blogContent } from "@/config/blog_content";
import { categorytype } from "@/types/category";
function Page() {
  const data = blogContent[0];

  if (!data) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="bg-[#f3f8fe] text-zinc-950 font-Manrope w-full p-20">
      {/* Title (h1) */}
      <h1 className="text-6xl font-bold text-center py-5">{data.title}</h1>
      <p>{data.para}</p>

      {/* Categories (h2 and their content) */}
      {data.categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-4xl font-bold py-5">{category.category}</h2>

          {/* Subtitles (h3) under each category */}
          {category.subtitles.map(
            (sub: categorytype, subtitleIndex: number) => (
              <div key={subtitleIndex}>
                {sub?.subtitle && (
                  <h3 className="text-2xl font-bold py-5">{sub?.subtitle}</h3>
                )}

                <p>{sub.paragraphs}</p>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default Page;
