import { useEffect, useLayoutEffect, useState } from "react";
import { BigSpline, SmallSpline } from "~/components/Spline";
import { ClientOnly } from "remix-utils/client-only";

const Banner = () => {
  const [showBigSpline, setShowBigSpline] = useState(false);
  const [showSmallSpline, setShowSmallSpline] = useState(false);

  useLayoutEffect(() => {
    const resize_listener = () => {
      if (window.innerWidth < 948) {
        setShowBigSpline(false);
      } else {
        setShowBigSpline(true);
      }

      if (window.innerWidth >= 720 && window.innerWidth < 948) {
        setShowSmallSpline(true);
      } else {
        setShowSmallSpline(false);
      }
    };
    resize_listener();
    window.addEventListener("resize", resize_listener);

    return () => {
      window.removeEventListener("resize", resize_listener);
    };
  }, []);

  return (
    <div className="mt-16 flex items-center gap-8 px-6 720:h-[250px] 856:gap-32 948:h-[400px] 948:gap-8 1024:gap-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-medium uppercase text-neutral-400">
          Aryan Deora
        </h1>
        <h2 className="text-balance font-editorial text-5xl leading-tight text-neutral-300 948:text-6xl 948:leading-tight">
          UI Engineer with a passion for design and open source.
        </h2>
      </div>

      {showSmallSpline && (
        <div className="flex aspect-square h-[250px] flex-col gap-3">
          <SmallSpline />
        </div>
      )}

      {showBigSpline && (
        <div className="flex aspect-square h-[400px] flex-col gap-3 rounded-md">
          <BigSpline />
        </div>
      )}
    </div>
  );
};

export default Banner;

export const BannerClientOnly = () => {
  return (
    <ClientOnly
      fallback={
        <div className="mt-16 flex items-center gap-8 px-6 720:h-[250px] 948:h-[400px] 1024:gap-24"></div>
      }
    >
      {() => <Banner />}
    </ClientOnly>
  );
};
