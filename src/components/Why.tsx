import Image from "next/image";

function Why() {
  return (
    <section className="sm:h-[100vh] md:h-full h-full flex items-center w-full py-20 ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            WHY
          </p>
          <h2 className="text-5xl my-7 font-bold text-center">
            Why Companies Use <br />
            <span className="text-[#0e6cf6]">Exterview</span>
          </h2>
        </div>

        <div className="sm:px-36  px-2">
          <Image
            src={"/why.png"}
            width={1440}
            height={600}
            alt={"bento image for key features"}
          />
        </div>
      </div>
    </section>
  );
}

export default Why;
