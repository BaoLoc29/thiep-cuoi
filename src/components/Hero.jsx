import React from "react";
import DSC_1 from "../assets/DSC_1.png";
import DSC_2 from "../assets/DSC_2.png";
import DSC_3 from "../assets/DSC_3.png";

function Hero() {
  return (
    <section className="w-full">
      {/* Khối chứa banner và ảnh */}
      <div className="relative">
        {/* Banner */}
        <div className="w-full h-44 bg-gray-300"></div>

        {/* 3 ảnh */}
        <div className="absolute left-1/2 bottom-0 flex -translate-x-1/2 translate-y-1/2 gap-5">
          <img
            src={DSC_1}
            alt="anh"
            className="w-40 rounded-2xl border-4 border-green-700 shadow-lg"
          />

          <img
            src={DSC_2}
            alt="anh"
            className="w-40 rounded-2xl border-4 border-green-700 shadow-lg"
          />

          <img
            src={DSC_3}
            alt="anh"
            className="w-40 rounded-2xl border-4 border-green-700 shadow-lg"
          />
        </div>
      </div>

      {/* Chừa khoảng trống vì ảnh đang absolute */}
      <div className="h-28"></div>
    </section>
  );
}

export default Hero;
