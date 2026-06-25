import React, { useEffect, useState } from "react";
import DSC_1 from "../assets/images/DSC_4.jpg";

function Hero() {
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowTitle(true);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
        {/* Thư mời cưới */}
        <div
          className={`
            transition-all duration-1000
            ${
              showTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }
          `}
        >
          <p className="mt-8 text-2xl font-extralight tracking-[5px] font-serif">
            Thư Mời Cưới
          </p>
        </div>

        {/* Tên + ngày cưới */}
        <div
          className={`
            flex flex-col gap-2
            transition-all duration-[1500ms]
            ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          <p className="font-amsterdam text-[80px] mb-0 tracking-[2px]">
            Bảo Lộc & Thị Thel
          </p>

          <p className="text-3xl font-cafeta font-medium mb-0">
            09:30 | Thứ Tư
          </p>

          <p className="text-4xl tracking-[6px] font-bold font-cafeta mb-7">
            02.09.2026
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
