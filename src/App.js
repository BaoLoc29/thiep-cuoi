import Album from "./components/Album";
import End from "./components/End";
import Hero from "./components/Hero";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";
import { useRef, useState, useEffect } from "react";
import { FaMusic } from "react-icons/fa";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openCover, setOpenCover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenCover(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tryPlay = async () => {
      try {
        if (!audioRef.current) return;
        await audioRef.current.play();
        setIsPlaying(true);

        // remove listener sau khi phát thành công
        window.removeEventListener("click", tryPlay);
        window.removeEventListener("scroll", tryPlay);
      } catch (err) {
        console.log("Chưa có interaction user");
      }
    };

    window.addEventListener("click", tryPlay);
    window.addEventListener("scroll", tryPlay, { passive: true });

    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/vay-cuoi.mp3" type="audio/mpeg" />
      </audio>
      <div className="relative w-full max-w-[420px] bg-white shadow-2xl overflow-hidden">
        <Hero />
        <Main />
        <TimeLine />
        <Album />
        <End />
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 left-4 bg-white shadow-lg p-3 rounded-full text-green-700 text-xl"
        >
          <FaMusic className={isPlaying ? "spin-slow" : ""} />
        </button>
        {/* Bìa thiệp */}
        <div className="absolute inset-0 z-50">
          {/* Cánh trái */}
          <div
            className={`absolute left-0 top-0 h-full w-1/2
        bg-gradient-to-br from-[#faf5ef] via-[#f5ede2] to-[#eadbc8]
        flex items-center justify-center
        transition-transform duration-[2500ms] ease-in-out
        ${openCover ? "-translate-x-full" : ""}`}
          >
            <div className="text-center">
              <p className="tracking-[6px] uppercase text-[#b08d57] text-sm">
                Wedding
              </p>
              <h1 className="text-4xl font-serif mt-3">Bảo Lộc</h1>
            </div>
          </div>

          {/* Cánh phải */}
          <div
            className={`absolute right-0 top-0 h-full w-1/2
        bg-gradient-to-bl from-[#faf5ef] via-[#f5ede2] to-[#eadbc8]
        flex items-center justify-center
        transition-transform duration-[2500ms] ease-in-out
        ${openCover ? "translate-x-full" : ""}`}
          >
            <div className="text-center">
              <div className="text-5xl">💍</div>
              <p className="mt-3 tracking-[4px] text-[#b08d57]">Invitation</p>
            </div>
          </div>

          {/* Đường gấp giữa */}
          <div
            className={`absolute left-1/2 top-0 h-full w-[2px]
        -translate-x-1/2 bg-[#d6c5a6]
        transition-opacity duration-700
        ${openCover ? "opacity-0" : "opacity-100"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
