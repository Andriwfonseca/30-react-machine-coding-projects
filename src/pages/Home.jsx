import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <header className="bg-purple-600 text-white font-bold flex flex-col items-center">
        <div className="text-6xl">30 projetos</div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4">
        <Card
          title="Contador"
          description="Um contador simples feito com React."
          route="/counter"
        />
      </div>
    </div>
  );
};

export default Home;
