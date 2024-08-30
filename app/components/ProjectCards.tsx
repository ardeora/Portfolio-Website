import { ReactNode, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const TanStackDevtools = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2">
      <div className="relative h-64 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/bg.png"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-1.5 backdrop-blur">
          <img
            src="/imgs/tanstack.png"
            alt="Placeholder"
            className="h-18 w-18"
          />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">TanStack DevTools</div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Open Source
      </div>
      <div className="flex px-1 pt-2 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti
        rem. Commodi iure optio incidunt asperiores eius porro molestiae nostrum
        culpa ea doloremque possimus pariatur modi, deserunt accusantium sit
        neque?
      </div>
    </div>
  );
};

const Bollywordle = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2">
      <div className="relative h-52 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/bg_5.png"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full font-daily-shine text-4xl text-white">
          Bollywordle
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">Bollywordle</div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Coming Soon
      </div>
      <div className="flex px-1 pt-2 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti
        rem. Commodi iure optio incidunt asperiores eius porro molestiae nostrum
        culpa ea doloremque possimus pariatur modi, deserunt accusantium sit
        neque?
      </div>
    </div>
  );
};

const SolidToast = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2">
      <div className="relative h-52 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/bg_4.png"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/50 bg-white/20 p-2 pl-2.5 backdrop-blur-md">
          <img src="/imgs/toast.png" alt="Placeholder" className="w-16" />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">Solid Toast</div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Open Source
      </div>
      <div className="flex px-1 pt-2 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti
        rem. Commodi iure optio incidunt asperiores eius porro molestiae nostrum
        culpa ea doloremque possimus pariatur modi, deserunt accusantium sit
        neque?
      </div>
    </div>
  );
};

const TanstackSolidQuery = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2">
      <div className="relative h-56 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/bg_6.png"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/20 bg-blue-50/10 p-1.5 contrast-125 backdrop-blur">
          <img src="/imgs/solid.png" alt="Placeholder" className="w-16" />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        TanStack Solid Query
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Open Source
      </div>
      <div className="flex px-1 pt-2 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti
        rem. Commodi iure optio incidunt asperiores eius porro molestiae nostrum
        culpa ea doloremque possimus pariatur modi, deserunt accusantium sit
        neque?
      </div>
    </div>
  );
};

const GlobalNOC = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2">
      <div className="relative h-64 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        {/* <TestClientOnly /> */}
        <img
          src="/imgs/bg_2.png"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/20 bg-black/40 p-2 py-2.5 backdrop-blur">
          <img src="/imgs/grnoc.png" alt="Placeholder" className="w-16" />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">GlobalNOC</div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Full Time
      </div>
      <div className="flex px-1 pt-2 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti
        rem. Commodi iure optio incidunt asperiores eius porro molestiae nostrum
        culpa ea doloremque possimus pariatur modi, deserunt accusantium sit
        neque?
      </div>
    </div>
  );
};

const LWJ = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2">
      <div className="relative h-52 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/bg_7.png"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 font-lwj text-xl text-white">
          <div className="lwj-container absolute -inset-0.5 rounded"></div>
          <div className="absolute inset-0 rounded-sm bg-[#201C28]"></div>
          <span className="lwj-text relative">Learn With Jason</span>
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        Learn With Jason Show
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Interview
      </div>
      <div className="flex px-1 pt-2 text-sm text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti
        rem. Commodi iure optio incidunt asperiores eius porro molestiae nostrum
        culpa ea doloremque possimus pariatur modi, deserunt accusantium sit
        neque?
      </div>
    </div>
  );
};

const cards = [
  <TanStackDevtools key={1} />,
  <SolidToast key={2} />,
  <GlobalNOC key={3} />,
  <Bollywordle key={4} />,
  <TanstackSolidQuery key={5} />,
  <LWJ key={6} />,
];

const ProjectsContainer = (props: { children: ReactNode; show: boolean }) => {
  if (!props.show) {
    return null;
  }
  return <div className="flex flex-col gap-4">{props.children}</div>;
};

export const ProjectCards = () => {
  const [windowWidth, setWindowWidth] = useState(2000);
  const [clientRender, setClientRender] = useState(0);

  useEffect(() => {
    const resize_listener = () => {
      setWindowWidth(window.innerWidth);
      setClientRender(1);
    };
    window.addEventListener("resize", resize_listener);
    resize_listener();
    return () => {
      window.removeEventListener("resize", resize_listener);
    };
  }, []);

  const grid_class = useMemo(() => {
    if (windowWidth < 720) {
      return "grid grid-cols-1 gap-4 pt-6";
    }
    if (windowWidth < 948) {
      return "grid grid-cols-2 gap-4 pt-6";
    }
    return "grid grid-cols-3 gap-4 pt-6";
  }, [windowWidth]);

  const divisor = useMemo(() => {
    if (windowWidth < 720) {
      return 1;
    }
    if (windowWidth < 948) {
      return 2;
    }
    return 3;
  }, [windowWidth]);

  return (
    <div
      className={grid_class}
      style={{
        opacity: clientRender,
      }}
    >
      <ProjectsContainer show>
        {cards.map((card, index) => {
          if (index % divisor === 0) {
            return card;
          }
          return null;
        })}
      </ProjectsContainer>
      <ProjectsContainer show={windowWidth >= 720}>
        {cards.map((card, index) => {
          if (index % divisor === 1) {
            return card;
          }
          return null;
        })}
      </ProjectsContainer>
      <ProjectsContainer show={windowWidth >= 948}>
        {cards.map((card, index) => {
          if (index % divisor === 2) {
            return card;
          }
          return null;
        })}
      </ProjectsContainer>
    </div>
  );
};
