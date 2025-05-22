import { ChevronDown } from "lucide-react";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";

const optionsMock = [
  { id: 1, label: "Opção 1" },
  { id: 2, label: "Opção 2" },
  { id: 3, label: "Opção 3" },
  { id: 4, label: "Opção 4" },
  { id: 5, label: "Opção 5" },
];

const ClickOutsideDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col max-w-8xl items-center mx-auto">
      <div className="flex flex-col pt-[150px] items-center mx-3">
        <h1 className="text-7xl font-bold">
          Dropdown que fecha ao clicar fora dele
        </h1>
        <div className="relative w-full mt-10" ref={dropdownRef}>
          <Button
            variant="secondary"
            onClick={handleToggleDropdown}
            addClassName={
              "w-full justify-between bg-white border border-gray-200"
            }
          >
            {selectedOption ? selectedOption.label : "Selecione uma opção"}
            <ChevronDown
              className={`h-4 w-4 ml-2 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>

          {isOpen && (
            <div className="absolute mt-2 w-full rounded-md border border-gray-200 bg-background z-10 shadow-lg">
              <ul className="py-1">
                {optionsMock.map((option) => (
                  <Button
                    key={option.id}
                    variant="secondary"
                    addClassName={`w-full text-left text-sm hover:bg-gray-100 border-none ${
                      selectedOption?.id === option.id
                        ? "bg-gray-100"
                        : "bg-white"
                    }`}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option.label}
                  </Button>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClickOutsideDropdown;
