import React from "react";
import Spline from "@splinetool/react-spline";

export const Banner = () => {
  return (
    <div className="flex justify-center pt-12 pb-10 min-h-[464px]">
      <Spline
        className="!w-auto"
        scene="/spline/portfolio_banner_light.splinecode"
      />
    </div>
  );
};
