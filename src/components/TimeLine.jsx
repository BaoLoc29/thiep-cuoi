import React from "react";
import DSC_1 from "../assets/images/DSC_4.jpg";
import heart from "../assets/images/heart.png";
import endpicture from "../assets/images/pic.png";
import useInViewOnce from "../hook/useInViewOnce.js";

const TimeLine = () => {
  const invite = useInViewOnce(0.2);

  const ceremony = useInViewOnce(0.2);

  const calendar = useInViewOnce(0.15);

  const days = [
    ["", 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, "", "", "", ""],
  ];
  return (
    <section
      ref={invite.ref}
      className="text-center flex flex-col justify-center items-center overflow-hidden"
    >
      <div ref={invite.ref}>
        <div className="w-[220px] pt-5 my-0 mx-auto">
          <div className="border-t-2 border-gray-950"></div>
          <p
            className={`
            text-center
            font-pinyon
            text-5xl
            my-5
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${invite.show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
          >
            Thiệp mời
          </p>
        </div>
        <p
          className={`
          font-cormorant
          text-lg
          mb-0
          transform-gpu
          will-change-transform
          transition-[transform,opacity]
          duration-[5000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${invite.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
        >
          THAM DỰ LỄ CƯỚI BẢO LỘC & THỊ THEL
        </p>
        <div className="flex gap-2 px-2 py-5 items-center">
          <div className="flex-1 justify-center">
            <img
              src={DSC_1}
              alt="chú rể"
              className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${invite.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
            `}
            />
          </div>

          <div className="flex-[1.2] justify-center">
            <img
              src={DSC_1}
              alt="cô dâu"
              className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                invite.show
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }
            `}
            />
          </div>

          <div className="flex-1 justify-center">
            <img
              src={DSC_1}
              alt="cô dâu"
              className={`
              w-full
              h-auto
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${invite.show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
            />
          </div>
        </div>
      </div>
      <div ref={ceremony.ref}>
        <div className="font-sans text-center py-5">
          <p className="font-bold text-lg mb-0">TIỆC MỪNG LỄ THÀNH HÔN</p>
          <p className="text-base font-medium mb-0">Vào lúc</p>
        </div>
        <div className="flex items-center w-full">
          <div className="flex-1 text-center">
            <p
              className={`
              text-lg
              flex-1
              text-center
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              `}
            >
              09:30
            </p>
          </div>
          <div className="h-24 w-px bg-gray-400"></div>
          <div className="flex-1 text-center ">
            <p
              className={`
              text-lg 
              tracking-[1px] 
              mb-2
              transform-gpu
              will-change-transform
              transition-[opacity,transform]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
            `}
            >
              Thứ Tư
            </p>

            <p
              className={`
            my-0 
            text-4xl 
            font-bold 
            leading-none
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            origin-center
            ${ceremony.show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
            >
              02
            </p>

            <p
              className={`
              text-lg 
              tracking-[1px] 
              my-2
              transform-gpu
              will-change-transform
              transition-[opacity,transform]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            >
              Tháng 9
            </p>
          </div>
          <div className="h-24 w-px bg-gray-400"></div>
          <div className="flex-1 text-center">
            <p
              className={`
              text-lg
              flex-1
              text-center
              transform-gpu
              will-change-transform
              transition-[transform,opacity]
              duration-[5000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ceremony.show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
            >
              Năm 2026
            </p>
          </div>
        </div>
        <div
          className={`
          text-base 
          italic 
          py-2
          transform-gpu
          will-change-transform
          transition-[opacity,transform]
          duration-[5000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${ceremony.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >
          <p>(Tức ngày 21 tháng 7 năm Bính Ngọ)</p>
        </div>
      </div>

      {/* Lịch */}
      <div ref={calendar.ref} className="w-full px-6 pb-6">
        <div className="flex justify-between items-center">
          <p
            className={`
            text-[45px]
            italic 
          text-green-800 
            font-pinyon 
            mb-0
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${calendar.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
          >
            Tháng 9
          </p>
          <p className="text-7xl font-black text-green-800 font-sans mb-1">
            2026
          </p>
        </div>

        {/* Calendar */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white">
              {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
                <th
                  key={d}
                  className="border border-black py-2 text-base font-semibold"
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {days.map((week, i) => (
              <tr key={i}>
                {week.map((day, index) => (
                  <td
                    key={index}
                    className="relative h-12 border border-green-800 text-center align-middle text-lg text-green-800"
                  >
                    {day === 2 ? (
                      <>
                        <img
                          src={heart}
                          alt="Heart"
                          className="absolute h-16 -top-1 calendar.show-heartbeat pointer-events-none"
                        />

                        <span
                          className={`
                            relative 
                            font-bold 
                            z-999
                            transform-gpu
                            will-change-transform
                            transition-[opacity,transform]
                            duration-[5000ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${calendar.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                          `}
                        >
                          2
                        </span>
                      </>
                    ) : (
                      day
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <img
          src={endpicture}
          alt=""
          className={`
            w-full 
            h-auto
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${calendar.show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
        />
      </div>
      <div>
        <p
          className={`
            font-pinyon 
            text-4xl 
            mt-5 
            mb-3
            transform-gpu
            will-change-transform
            transition-[transform,opacity]
            duration-[5000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            origin-center
            ${calendar.show ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        >
          Địa điểm tổ chức
        </p>
        <div className="w-full bg-gray-200 rounded-3xl py-6">
          <p className="text-xl mb-2 font-bold">Tại Tư Gia Nhà Trai</p>
          <p className="text-base mb-0 px-5">
            Ấp Long Thạnh 2, Xã Phú Lâm, Tỉnh An Giang
          </p>
          <div className=" p-4 overflow-hidden rounded-md">
            <iframe
              title="Địa điểm tổ chức lễ cưới"
              src="https://maps.google.com/maps?q=10.763028,105.276306&t=k&z=19&output=embed"
              className="h-[300px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Button */}
          <div className="mt-2 flex justify-center">
            <a
              href="https://maps.app.goo.gl/UpBCsM9yqTuxsyT6A"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-800 px-10 py-2 text-base font-bold uppercase text-white 
              shadow-lg transition hover:bg-green-700 active:scale-95"
            >
              XEM TRÊN GOOGLE MAP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
