import Album from "./components/Album";
import End from "./components/End";
import Hero from "./components/Hero";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="w-full h-full bg-gray-200 flex justify-center items-center">
      {/* Khung điện thoại */}
      <div className="w-[420px] aspect-[9/16] bg-white shadow-2xl">
        <Hero />
        <Main />
        <TimeLine />
        <Album />
        <End />
      </div>
    </div>
  );
}

export default App;
