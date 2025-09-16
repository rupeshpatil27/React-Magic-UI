import React, { useRef } from "react";
import Circle from "../component/Circle";
import AnimatedBeam from "../component/AnimatedBeam";

import { FaRegUser } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const BiDirectionalBeams = () => {
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
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        reverse
      />
    </div>
  );
};

export default BiDirectionalBeams;
