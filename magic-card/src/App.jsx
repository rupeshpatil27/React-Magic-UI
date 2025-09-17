import MagicCard from "./component/MagicCard";

function App() {
  return (
    <div className="relative">
      <h1 className="text-center mt-10 text-3xl font-bold">Magic Card</h1>

      <div className="w-[15rem] h-[60vh]">
        <MagicCard
          gradientColor={"#262626"}
          className="p-0"
          gradientFrom="red"
          gradientTo="blue"
        >
          <div className="p-4">
            <p>Hello World</p>
            <span>Hover me</span>
          </div>
        </MagicCard>
      </div>
    </div>
  );
}

export default App;
