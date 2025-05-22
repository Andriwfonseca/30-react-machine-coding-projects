import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Button from "./components/Button";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

      {!isHome && (
        <div className="w-full flex flex-col gap-4 items-center mb-10">
          <Button onClick={() => navigate("/")}>Voltar para o início</Button>
        </div>
      )}
    </div>
  );
}

export default App;
