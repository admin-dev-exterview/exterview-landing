import Image from "next/image";
import React from "react";

interface MenuItem {
  name: string;
  layerName: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", layerName: "home" },
  { name: "Features", layerName: "features" },
  { name: "How it works", layerName: "howItWorks" },
  { name: "Case Studies", layerName: "caseStudies" },
  { name: "Contact us", layerName: "contactUs" },
];

const Header: React.FC = () => {
  return (
    <header className="flex z-10 flex-col self-center w-full text-md font-medium tracking-tight max-md:max-w-full px-5 py-5">
      <nav
        data-layername="menu"
        className="flex overflow-hidden flex-wrap gap-5 justify-between px-7 py-2 w-full rounded-2xl border border-solid bg-white bg-opacity-80 border-neutral-900 border-opacity-10 max-md:px-5 max-md:max-w-full"
      >
        <Image
          //   loading="lazy"
          src={"/logo.png"}
          alt="Exterview logo"
          width={180}
          height={40}
          className="object-contain shrink-0 my-auto max-w-full p-2"
        />
        <div className="flex flex-wrap gap-3.5 max-md:max-w-full">
          <div className="flex flex-wrap flex-auto items-center text-neutral-900 text-opacity-40 max-md:max-w-full">
            {menuItems.map((item) => (
              <div
                key={item.layerName}
                data-layername={item.layerName}
                className="gap-2.5 self-stretch px-7 py-1 my-auto whitespace-nowrap max-md:px-5"
              >
                {item.name}
              </div>
            ))}
          </div>
          <button
            data-layername="bookADemo"
            className="px-8 text-white bg-gradient-to-bl from-[#0e6cf6] to-[#5450fe] rounded-full"
          >
            Book a demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
