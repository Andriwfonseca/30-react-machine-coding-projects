import Card from "../components/card";

const Home = () => {
  return (
    <div>
      <header className=" font-bold flex flex-col items-center">
        <div className="text-6xl text-white">
          30 projetos para praticar React
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 mx-14">
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
