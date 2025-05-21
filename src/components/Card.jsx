import { useNavigate } from "react-router-dom";

const Card = ({ title, description, route }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:cursor-pointer hover:bg-blue-600 transition duration-200"
        onClick={() => navigate(route)}
      >
        Ir para o projeto
      </button>
    </div>
  );
};

export default Card;
