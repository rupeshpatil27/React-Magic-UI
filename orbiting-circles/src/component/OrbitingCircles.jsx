import React from "react";
import { cn } from "../lib/utils";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/10 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const totalChildren = React.Children.count(children);
        const angle = (360 / totalChildren) * index;

        return (
          <div
            style={{
              animation: `orbit ${calculatedDuration}s linear infinite`,
              animationDirection: reverse ? "reverse" : "normal",
              transformOrigin: "center center",
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={cn(
              `absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,

              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
