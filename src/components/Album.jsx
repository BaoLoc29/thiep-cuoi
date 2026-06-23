import album from "../assets/images/album.png";
import DSC_1 from "../assets/images/DSC_4.jpg";
const Album = () => {
  return (
    <section className="px-6">
      <div className="flex items-center justify-between h-14 mt-5">
        <p className="font-ephesis text-[32px] mb-0"> Album hình cưới</p>
        <div className="w-1/2 h-28 overflow-hidden relative">
          <img
            src={album}
            alt="Album"
            className="absolute inset-0 w-[510px] h-full max-w-none object-cover object-center"
          />
        </div>
      </div>
      <div className="bg-green-800 grid grid-cols-2 gap-3 p-3">
        <img src={DSC_1} alt="chú rể" className="w-full h-auto" />
        <img src={DSC_1} alt="chú rể" className="w-full h-auto" />
        <img src={DSC_1} alt="chú rể" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Album;
