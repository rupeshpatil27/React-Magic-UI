import { useEffect, useState } from "react";
import { CircularProgressBar } from "./component/CircularProgressBar";

function App() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 5); 
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="relative">
      <h1 className="text-center mt-10 text-3xl font-bold">
        Animated Circular Progress Bar
      </h1>

      <div className="mt-5 w-full h-full relative flex justify-center items-center">
        <CircularProgressBar
          value={progress}  // Progress value (from 0 to 100)
          gaugePrimaryColor="#4caf50"  
          gaugeSecondaryColor="#e0e0e0"
        />
      </div>
    </div>
  );
}

export default App;
