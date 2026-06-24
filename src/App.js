import Album from "./components/Album";
import End from "./components/End";
import Hero from "./components/Hero";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";
import { useRef, useState, useEffect } from "react";
import { FaMusic } from "react-icons/fa";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // thử autoplay (có thể bị browser chặn)
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay bị chặn, cần user click");
      }
    };

    playAudio();
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
        <source src="/public/music.mp3" type="audio/mpeg" />
      </audio>
      <div className="w-full max-w-[420px] bg-white shadow-2xl">
        <Hero />
        <Main />
        <TimeLine />
        <Album />
        <End />
      </div>
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 left-4 bg-white shadow-lg p-3 rounded-full text-green-700 text-xl"
      >
        <FaMusic className={isPlaying ? "animate-pulse" : ""} />
      </button>
    </div>
  );
}

export default App;
