import CentralAttractionBeams from "./examples/CentralAttractionBeams";
import UniDirectionalBeam from "./examples/UniDirectionalBeam";
import BiDirectionalBeams from "./examples/BiDirectionalBeams";

function App() {

  return (
    <div className="relative">
      <h1 className="text-center mt-10 text-3xl font-bold">Animated Beam</h1>

      <div className="w-full h-full flex flex-col gap-20 items-center mt-10">
        <UniDirectionalBeam />
        <BiDirectionalBeams/>
        <CentralAttractionBeams />
      </div>
    </div>
  );
}

export default App;
