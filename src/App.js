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
      <div className="w-full max-w-[420px] bg-white shadow-2xl">
        <Hero />
        <Main />
        <TimeLine />
        <Album />
        <End />
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 left-4 bg-white shadow-lg p-3 rounded-full text-green-700 text-xl z-999"
        >
          <FaMusic className={isPlaying ? "spin-slow" : ""} />
        </button>
      </div>
    </div>
  );
}

export default App;
