import React from "react";
import DSC_1 from "../assets/images/DSC_1.png";

function Hero() {
  return (
    <section className="w-full">
      {/* Banner */}
      <div className="relative">
        <div className="h-28 w-full bg-gray-300 md:h-44 lg:h-60"></div>

        {/* 3 ảnh */}
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-2 md:gap-4 lg:gap-6">
          <div className="overflow-hidden rounded-xl border-2 border-green-700 shadow-lg md:rounded-2xl md:border-4">
            <img src={DSC_1} alt="anh" className="w-20 md:w-32 lg:w-44" />
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-green-700 shadow-lg md:rounded-2xl md:border-4">
            <img src={DSC_1} alt="anh" className="w-20 md:w-32 lg:w-44" />
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-green-700 shadow-lg md:rounded-2xl md:border-4">
            <img src={DSC_1} alt="anh" className="w-20 md:w-32 lg:w-44" />
          </div>
        </div>
      </div>

      {/* Khoảng trống */}
      <div className="h-16 md:h-24 lg:h-32 "></div>
      {/* Phần tiếp theo trong thiệp cưới - tạo file component mới */}
    </section>
  );
}

export default Hero;
