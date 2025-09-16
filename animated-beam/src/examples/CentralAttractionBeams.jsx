import React, { useRef } from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Circle from "../component/Circle";
import AnimatedBeam from "../component/AnimatedBeam";

const CentralAttractionBeams = () => {
  const Container = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  return (
      <div className="flex relative size-full max-w-lg flex-col items-stretch justify-between gap-10" ref={Container}>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <FaReact className="size-full"/>
          </Circle>
          <Circle ref={div5Ref}>
            <FaHtml5 className="size-full"/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <IoLogoJavascript className="size-full"/>
          </Circle>

          <img
            src="/img1.jpg"
            ref={div4Ref}
            alt="img1"
            className="rounded-full size-40 z-10 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          />

          <Circle ref={div6Ref}>
            <FaCss3Alt className="size-full"/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <FaNodeJs className="size-full"/>
          </Circle>
          <Circle ref={div7Ref}>
            <FaGithub className="size-full"/>
          </Circle>
        </div>
    
      <AnimatedBeam
        containerRef={Container}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-100}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={Container}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={Container}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={100}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={Container}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-100}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={Container}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={Container}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={100}
        endYOffset={10}
        reverse
      />
    </div>
  );
};

export default CentralAttractionBeams;
