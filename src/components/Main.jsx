import React from "react";
import heart from "../assets/images/heart.png";
import DSC_1 from "../assets/images/DSC_4.jpg";

const Main = () => {
  return (
    <section className="text-center">
      <p className="font-pinyon text-xl px-4">
        "Hôn nhân là chuyện cả đời, <br></br>
        Yêu người vừa ý, cưới người mình thương..."
      </p>

      <div className="h-[19rem] gap-10 flex flex-col">
        {/* box 2 ông bà sui */}
        <div className="flex font-cafeta justify-around gap-2 text-lg px-2">
          {/* NHÀ TRAI */}
          <div>
            <p className="mb-2">NHÀ TRAI</p>
            <p className="mb-0 uppercase">Ông Trần Văn Phúc</p>
            <p className="mb-0 uppercase">Bà Nguyễn Thị Mỹ Dung</p>
            <p className="mb-0 font-mono text-sm tracking-[1px]">
              Phú Lâm, An Giang
            </p>
          </div>
          {/* <div className="w-px self-stretch bg-gray-400"></div> */}
          {/* NHÀ GÁI */}
          <div>
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
        <div className="flex justify-around gap-2">
          <div>
            <p className="mb-2 font-cormorant text-xl">CHÚ RỂ</p>
            <p className="text-[55px] font-amsterdam mb-0">Trần Bảo Lộc</p>
          </div>
          <div>
            <p className="mb-2 font-cormorant text-xl">CÔ DÂU</p>
            <p className="text-[55px] font-amsterdam mb-0">Lâm Thị Thel</p>
          </div>
        </div>
      </div>
      <div className="flex bg-green-800 gap-3 p-3">
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
