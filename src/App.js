import Album from "./components/Album";
import End from "./components/End";
import Hero from "./components/Hero";
import Main from "./components/Main";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full max-w-[420px] bg-white shadow-2xl">
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
