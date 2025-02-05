import { useRouter } from "next/navigation";

function RequestADemo() {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col pt-10 pb-20 items-center justify-center sm:px-36 px-5">
      <div className=" bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] w-full h-[35vh] rounded-xl flex flex-col justify-center gap-7 items-start sm:px-20 px-5">
        <h1 className="text-white sm:text-5xl text-3xl font-semibold text-start ">
          Ready to see <br /> Exterview in Action
        </h1>
        <button
          data-layername="bookADemo"
          className="px-8 py-3 text-black bg-white rounded-full font-medium"
          onClick={() => router.push("/booking")}
        >
          Book a demo
        </button>
      </div>
    </section>
  );
}

export default RequestADemo;
