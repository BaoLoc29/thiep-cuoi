import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-full h-full bg-gray-200 flex justify-center items-center">
      {/* Khung điện thoại */}
      <div className="w-[420px] aspect-[9/16] bg-white shadow-2xl">
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App;