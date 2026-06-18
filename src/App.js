import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/* Khung 9:16 */}
      <div className="w-full max-w-[430px] aspect-[9/16] bg-white shadow-2xl overflow-hidden">
        <Hero />
      </div>
    </div>
  );
}

export default App;