import StarIcon from "@/assets/icons/star.svg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  spinDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className={" flex items-start justify-start "}
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(`${shouldSpin && "animate-spin"}`)}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className={" inline-flex"}
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
