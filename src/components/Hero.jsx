import React from "react";
import DSC_1 from "../assets/images/DSC_4.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ảnh */}
      <img src={DSC_1} alt="Ảnh cưới" className="w-full h-auto block" />

      {/* Gradient trắng */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[60%]
          bg-gradient-to-t
          from-white
          via-white/80
          to-transparent
        "
      />

      {/* Nội dung */}
      <div className="absolute inset-0 flex flex-col justify-between text-center text-gray-900">
        <div>
          <p className="mt-8 text-3xl font-extralight tracking-[6px] font-serif">
            Thư Mời Cưới
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-amsterdam text-[80px] mb-0">Bảo Lộc & Thị Thel</p>

          <p className="text-2xl font-mono font-bold mb-0">09:30 | Thứ Tư</p>

          <p className="text-4xl tracking-[6px] font-bold font-barlow mb-7">
            02.09.2026
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
