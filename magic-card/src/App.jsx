import MagicCard from "./component/MagicCard";

function App() {
  return (
    <div className="relative">
      <h1 className="text-center mt-10 text-3xl font-bold">Magic Card</h1>

      <div className="w-full h-full flex flex-col gap-20 items-center mt-10">
        <div className="p-0 w-[15rem] h-[50vh] shadow-none border-none rounded-xl">
          <MagicCard
            gradientColor="#D9D9D955"
            className="p-0 w-full h-full flex items-center justify-center"
            gradientFrom="#A07CFE"
            gradientTo="#FE8FB5"
          >
            <div className="p-4">
              <p>Hello World</p>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}

export default App;
