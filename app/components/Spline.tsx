import SplineApp from "@splinetool/react-spline";
import { motion, useAnimate, useMotionValue } from "framer-motion";
import { createContext, useContext } from "react";

export const SplineAnimatedContext = createContext<{
  animated: boolean;
  setAnimated: (value: boolean) => void;
}>({
  animated: true,
  setAnimated: () => {},
});

export const useSplineAnimated = () => {
  return useContext(SplineAnimatedContext);
};

export const SmallSplineAnimatedContext = createContext<{
  animated: boolean;
  setAnimated: (value: boolean) => void;
}>({
  animated: true,
  setAnimated: () => {},
});

export const useSmallSplineAnimated = () => {
  return useContext(SplineAnimatedContext);
};

export const BigSpline = () => {
  const initialAnimationSequence = useSplineAnimated();
  const opacity = useMotionValue(initialAnimationSequence.animated ? 1 : 0);
  const [_, animate] = useAnimate();

  return (
    <div className="relative">
      <motion.div className="relative h-[400px] w-[400px]" style={{ opacity }}>
        <SplineApp
          className="bg-neutral-950/0"
          scene="https://prod.spline.design/aIp41O5WjGzGy0k7/scene.splinecode"
          onLoad={(e) => {
            if (!initialAnimationSequence.animated) {
              animate(opacity, 1, { duration: 4, delay: 1 });
              initialAnimationSequence.setAnimated(true);
            }
          }}
        />
      </motion.div>
      <div className="absolute left-4 top-4 animate-rotate-anticlockwise text-[#dad5be]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 47 47"
        >
          <path
            fill="currentColor"
            d="M22.356 2.927a1 1 0 011.817 0l4.684 10.183a1 1 0 001 .578l11.161-1.036a1 1 0 01.909 1.574l-6.477 9.148a1 1 0 000 1.155l6.477 9.148a1 1 0 01-.909 1.574l-11.16-1.036a1 1 0 00-1.001.578l-4.684 10.183a1 1 0 01-1.817 0l-4.684-10.183a1 1 0 00-1-.578L5.51 35.251a1 1 0 01-.909-1.574l6.477-9.148a1 1 0 000-1.155l-6.477-9.148a1 1 0 01.909-1.574l11.16 1.036a1 1 0 001.002-.578l4.683-10.183z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-2 right-2 animate-rotate-clockwise text-[#dad5be]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          fill="none"
          viewBox="0 0 49 49"
        >
          <path
            fill="currentColor"
            d="M23.393 4.262c.28-.962 1.642-.962 1.92 0l2.534 8.731a1 1 0 001.517.552l7.553-5.06c.832-.557 1.876.319 1.471 1.235l-3.672 8.316a1 1 0 00.807 1.399l9.039.978c.996.108 1.232 1.45.333 1.892l-8.158 4.01a1 1 0 00-.28 1.59l6.294 6.56c.694.722.012 1.902-.96 1.663l-8.828-2.172a1 1 0 00-1.237 1.038l.606 9.07c.067 1-1.214 1.466-1.805.658l-5.366-7.339a1 1 0 00-1.615 0l-5.366 7.339c-.591.808-1.872.342-1.805-.657l.606-9.071a1 1 0 00-1.237-1.038l-8.828 2.172c-.972.24-1.654-.941-.96-1.664l6.295-6.559a1 1 0 00-.28-1.59l-8.16-4.01c-.898-.442-.662-1.784.334-1.892l9.039-.978a1 1 0 00.807-1.398L10.319 9.72c-.405-.916.64-1.792 1.471-1.235l7.553 5.06a1 1 0 001.517-.552l2.533-8.731z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export const SmallSpline = () => {
  const initialAnimationSequence = useSmallSplineAnimated();
  const opacity = useMotionValue(initialAnimationSequence.animated ? 1 : 0);
  const [_, animate] = useAnimate();

  return (
    <div className="relative">
      <motion.div className="relative h-[250px] w-[250px]" style={{ opacity }}>
        <SplineApp
          className="bg-neutral-950/0"
          scene="https://prod.spline.design/mwbEusvIOXQ97-By/scene.splinecode"
          onLoad={(e) => {
            if (!initialAnimationSequence.animated) {
              animate(opacity, 1, { duration: 4, delay: 1 });
              initialAnimationSequence.setAnimated(true);
            }
          }}
        />
      </motion.div>
    </div>
  );
};
