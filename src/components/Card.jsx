import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Card = ({ title, description, route }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 font-semibold">{description}</p>
      <div className="mt-4">
        <Button onClick={() => navigate(route)}>Ir para o projeto</Button>
      </div>
    </div>
  );
};

export default Card;
