import { OrbitingCircles } from "./component/OrbitingCircles";
import { FaReact } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

function App() {
  return (
    <div className="relative">
      <h1 className="text-center mt-10 text-3xl font-bold">Orbiting Circles</h1>

      <div className="relative overflow-hidden h-[500px] w-full mt-5">
        <OrbitingCircles>
          <FaReact color="blue" size={50}/>
          <IoLogoJavascript color="yellow" size={50}/>
          <RiTailwindCssFill color="blue" size={50}/>
        </OrbitingCircles>
        <OrbitingCircles radius={100} reverse speed={2}>
          <FaReact color="blue" size={65}/>
          <IoLogoJavascript color="yellow" size={65}/>
          <RiTailwindCssFill color="blue" size={65}/>
        </OrbitingCircles>
      </div>
    </div>
  );
}

export default App;
