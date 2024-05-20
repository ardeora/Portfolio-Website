import React, { useMemo } from "react";
import Spline, { type SplineProps } from "@splinetool/react-spline";
import "./banner.css";

export const Banner = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [splineApp, setSplineApp] = React.useState<
    Parameters<NonNullable<SplineProps["onLoad"]>>[0] | null
  >(null);
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (splineApp && windowWidth < 960) {
      const difference = 960 - windowWidth;
      const blob = splineApp.findObjectByName("Blob");
      if (blob) {
        if (windowWidth < 480) {
          blob.scale.x = 0.7;
          blob.scale.y = 0.22;
          blob.scale.z = 0.1;
          blob.position.x = -360;
          blob.position.y = -3.31;
        } else if (windowWidth < 550) {
          blob.scale.x = 0.5;
          blob.scale.y = 0.5;
          blob.scale.z = 0.5;
          blob.position.x = 375 - difference;
          blob.position.y = -3.31 + 16;
        } else if (windowWidth < 650) {
          blob.scale.x = 0.6;
          blob.scale.y = 0.6;
          blob.scale.z = 0.6;
          blob.position.x = 334 - difference;
          blob.position.y = -3.31;
        } else {
          blob.position.x = 312 - difference;
          blob.scale.x = 0.8;
          blob.scale.y = 0.8;
          blob.scale.z = 0.8;
          blob.position.y = -3.31;
        }
      }

      const starOne = splineApp.findObjectByName("StarOne");
      if (starOne) {
        starOne.position.x = 178.6 - difference;
        if (windowWidth < 700) {
          starOne.visible = false;
        } else {
          starOne.visible = true;
        }
      }

      const starTwo = splineApp.findObjectByName("StarTwo");
      if (starTwo) {
        starTwo.position.x = 422.35 - difference;
        if (windowWidth < 700) {
          starTwo.visible = false;
        } else {
          starTwo.visible = true;
        }
      }

      const name = splineApp.findObjectByName("Name");
      if (name) {
        if (windowWidth < 550) {
          name.position.x = -367 - 8;
          name.position.y = 137.5 + 16;
        } else {
          name.position.x = -367;
          name.position.y = 137.5;
        }
      }

      const byline = splineApp.findObjectByName("Byline");
      if (byline) {
        if (windowWidth < 480) {
          byline.scale.x = 0.7;
          byline.scale.y = 0.7;
          byline.scale.z = 0.7;
          byline.position.x = -241.09 - 72;
          byline.position.y = -13.49 + 56;
        } else if (windowWidth < 550) {
          byline.scale.x = 1;
          byline.scale.y = 1;
          byline.scale.z = 1;
          byline.position.x = -241.09 - 8;
          byline.position.y = -13.49 + 16;
        } else {
          byline.scale.x = 1;
          byline.scale.y = 1;
          byline.scale.z = 1;
          byline.position.x = -241.09;
          byline.position.y = -13.49;
        }
      }

      const title = splineApp.findObjectByName("Title");
      if (title) {
        if (windowWidth < 480) {
          title.position.x = -366.14 - 8;
          title.position.y = -138.74 + 76;
        } else if (windowWidth < 550) {
          title.position.x = -366.14 - 8;
          title.position.y = -138.74 + 16;
        } else {
          title.position.x = -366.14;
          title.position.y = -138.74;
        }
      }
    }
  }, [splineApp, windowWidth]);

  const sceneURL = useMemo(() => {
    if (windowWidth >= 960) {
      return "https://prod.spline.design/gso2ahBQzsOYSiPI/scene.splinecode";
    }
    return "https://prod.spline.design/88YvpfGdIiE9RsWV/scene.splinecode";
  }, [windowWidth]);

  const sceneSpecificClass = useMemo(() => {
    if (windowWidth >= 960) {
      return "pt-12 pb-10 justify-center";
    }
    return "";
  }, [windowWidth]);

  return (
    <>
      <div
        className={`flex box-content h-[376px] overflow-hidden ${sceneSpecificClass}`}
      >
        <Spline
          className="!w-auto"
          scene={sceneURL}
          onLoad={(e) => {
            setSplineApp(e);
          }}
        />
      </div>
    </>
  );
};
