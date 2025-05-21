import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";

function App() {
  return (
    <div className="bg-purple-900 flex flex-col items-center min-h-screen">
      <main className="flex-1 w-full p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
