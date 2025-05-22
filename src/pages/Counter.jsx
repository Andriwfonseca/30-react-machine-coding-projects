import { Minus, Plus, Redo2, Undo2 } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

const Counter = () => {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);

  const currentValue = history[position];

  const addValueToHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1);
    setHistory([...newHistory, newValue]);
    setPosition(position + 1);
  };

  const handleDecrement = () => addValueToHistory(currentValue - 1);
  const handleIncrement = () => addValueToHistory(currentValue + 1);

  const handleUndo = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const handleRedo = () => {
    if (position < history.length - 1) {
      setPosition(position + 1);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col pt-[150px] items-center ">
        <h1 className="text-7xl font-bold">Contador com Desfazer/Refazer</h1>
        <div className="flex flex-col justify-center mt-5 gap-4">
          <div className="flex justify-center items-center ">
            <div className="text-7xl font-semibold tabular-nums">
              {currentValue}
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Button onClick={handleDecrement}>
              <Minus className="h-4 w-4" />
            </Button>
            <Button onClick={handleIncrement}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Button
              variant="secondary"
              disabled={position === 0}
              onClick={handleUndo}
            >
              Desfazer <Undo2 className="h-4 w-4 ml-2" />
            </Button>
            <div className="text-sm text-muted-foreground">
              {position + 1} / {history.length}
            </div>
            <Button
              variant="secondary"
              disabled={position === history.length - 1}
              onClick={handleRedo}
            >
              Refazer <Redo2 className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
