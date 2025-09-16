import { FaRegUser } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import Circle from "../component/Circle";
import AnimatedBeam from "../component/AnimatedBeam";
import { useRef } from "react";

const UniDirectionalBeam = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  return (
    <div
      className="relative flex size-full max-w-[500px] flex-col items-stretch justify-between gap-10"
      ref={containerRef}
    >
      <div className="flex flex-row justify-between">
        <Circle ref={div1Ref}>
          <FaRegUser className="size-full"/>
        </Circle>
        <Circle ref={div2Ref}>
          <FaReact className="size-full"/>
        </Circle>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
};

export default UniDirectionalBeam;
