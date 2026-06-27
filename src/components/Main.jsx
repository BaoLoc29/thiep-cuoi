import React, { useEffect, useRef, useState } from "react";
import heart from "../assets/images/heart.png";
import DSC_1 from "../assets/images/DSC_4.jpg";

const Main = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="text-center overflow-hidden">
      <p
        className={`
          font-pinyon
          text-xl
          px-4
          transform-gpu
          will-change-transform
          transition-[opacity,transform]
          duration-[5000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}
        `}
      >
        "Hôn nhân là chuyện cả đời, <br></br>
        Yêu người vừa ý, cưới người mình thương..."
      </p>

      <div className="h-[19rem] gap-10 flex flex-col">
        {/* box 2 ông bà sui */}
        <div className="flex font-cafeta justify-around gap-2 text-lg px-2">
          {/* NHÀ TRAI */}
          <div
            className={`
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-28"}
            `}
          >
            <p className="mb-2">NHÀ TRAI</p>
            <p className="mb-0 uppercase">Ông Trần Văn Phúc</p>
            <p className="mb-0 uppercase">Bà Nguyễn Thị Mỹ Dung</p>
            <p className="mb-0 font-mono text-sm tracking-[1px]">
              Phú Lâm, An Giang
            </p>
          </div>
          {/* <div className="w-px self-stretch bg-gray-400"></div> */}
          {/* NHÀ GÁI */}
          <div
            className={`
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-28"}
            `}
          >
            <p className="mb-2">NHÀ GÁI</p>
            <p className="mb-0 uppercase">Ông Lâm Khươl</p>
            <p className="mb-0 uppercase">Bà Lý Thị Thủy</p>
            <p className="mb-0 font-mono text-sm tracking-[1px]">
              Vĩnh Hải, Cần Thơ
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={heart}
            alt="Heart"
            className="absolute top-[50rem] w-40 h-40 animate-heartbeat"
          />
        </div>
        {/* box cô dâu & chú rể */}
        <div className="flex justify-around gap-2 relative z-0">
          <div>
            <p className="mb-2 font-cormorant text-xl">CHÚ RỂ</p>
            <p
              className={`
                text-[55px]
                font-amsterdam
                mb-0
                transform-gpu
                will-change-transform
                transition-[transform,opacity]
                duration-[5000ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-44"}
              `}
            >
              Trần Bảo Lộc
            </p>
          </div>
          <div>
            <p className="mb-2 font-cormorant text-xl">CÔ DÂU</p>
            <p
              className={`
                text-[55px]
                font-amsterdam
                mb-0
                transform-gpu
                will-change-transform
                transition-[transform,opacity]
                duration-[5000ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-44"}
              `}
            >
              Lâm Thị Thel
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-green-800 gap-3 p-3 relative z-10">
        <div className="flex justify-center w-1/2">
          <img src={DSC_1} alt="chú rể" className="w-full h-auto" />
        </div>

        <div className="flex justify-center w-1/2">
          <img src={DSC_1} alt="cô dâu" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Main;
