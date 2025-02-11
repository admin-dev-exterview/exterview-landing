import Image from "next/image";

function Smaya() {
  return (
    <section className="bg-white sm:h-[100vh] md:h-full h-full flex items-center justify-center w-full pt-20 sm:px-0 px-5">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="bg-white border px-3 py-1 rounded-full text-[#0e6cf6] text-[12px] font-semibold">
            SMAYA
          </p>
          <h2 className="sm:text-5xl text-3xl my-7 font-bold text-center">
            Meet
            <span className="text-[#0e6cf6]">Smaya</span>. Your AI Agent For{" "}
            <br />
            End TO End Recruitment Activities
          </h2>
        </div>

        <div className="sm:px-80 px-0  w-full">
          <Image
            src={"/samaya.png"}
            width={1440}
            height={600}
            alt={"bento image for key features"}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Smaya;
