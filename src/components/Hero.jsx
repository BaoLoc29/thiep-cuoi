import React from "react";
import HeroImage from "../assets/DSC_4595.JPG";

function Hero() {
  return (
    <section className="relative w-full h-full bg-[#F5F5EE] flex flex-col items-center justify-center overflow-hidden">
      <img src={HeroImage} alt="anh" className="w-full h-1/2" />
      <div className="absolute inset-0 flex flex-col">
        <p className="text-xl tracking-[6px] text-center font-serif mt-10">
          Thư Mời Cưới
        </p>

        <h1 className="text-6xl text-center font-amsterdam">
          Bảo Lộc & Thị Thel
        </h1>

        <p className="text-3xl text-center font-mono">02.09.2026</p>
      </div>
    </section>
  );
}

export default Hero;
