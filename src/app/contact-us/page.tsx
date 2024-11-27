import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Page() {
  return (
    <div className="bg-[#f3f8fe]">
      <Header />
      <div className="h-screen flex flex-col items-start justify-start px-48 py-20 gap-5">
        <h1 className="font-bold text-4xl">Contact Us</h1>
        <p className="font-semibold text-2xl">Address</p>
        <p className="text-lg">
          Plot No 4/2, Sector 1, RAM SVR, Huda Techno Enclave, Hi-Tech City,
          Madhapur, Hyderabad, Shaikpet, Telangana, India, 500081.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
