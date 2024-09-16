import { ReactNode, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

const TanStackDevtools = () => {
  return (
    <div className="relative rounded-md border border-neutral-800 bg-neutral-900/80 p-2 transition-transform hover:scale-[1.005] hover:bg-neutral-900">
      <div className="relative h-64 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/projects/devtools_bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 p-1.5 backdrop-blur">
          <img
            src="/imgs/projects/tanstack_logo.webp"
            alt="TanStack Logo"
            className="h-18 w-18"
          />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        <a
          href="https://www.npmjs.com/package/@tanstack/query-devtools"
          target="_blank"
        >
          <span className="absolute inset-0"></span>
          <span className="relative hover:underline">TanStack DevTools</span>
        </a>
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        <dt className="sr-only">Project Type</dt>
        <dd>Open Source</dd>
      </div>
      <div className="flex px-1 pb-1 pt-2 text-sm text-neutral-400">
        <dt className="sr-only">Project Description</dt>
        <dd>
          Redesigned the devtools for Tanstack Query, making them
          framework-agnostic using SolidJS! Now, the same devtools work
          seamlessly with React Query, Vue Query, Solid Query, Svelte, and
          Angular Query. All powered by a single SolidJS core.
        </dd>
      </div>
    </div>
  );
};

const Bollywordle = () => {
  return (
    <div className="rounded-md border border-neutral-800 bg-neutral-900/80 p-2 transition-transform hover:scale-[1.005] hover:bg-neutral-900">
      <div className="relative h-52 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/projects/bollywordle_bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full font-daily-shine text-4xl text-white">
          Bollywordle
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        <dt className="sr-only">Project Name</dt>
        <dd className="hover:underline">Bollywordle</dd>
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        <dt className="sr-only">Project Type</dt>
        <dd>Coming Soon</dd>
      </div>
      <div className="flex px-1 pb-1 pt-2 text-sm text-neutral-400">
        <dt className="sr-only">Project Description</dt>
        <dd>
          A Bollywood song guessing game, inspired by Wordle. Coming soon!
        </dd>
      </div>
    </div>
  );
};

const SolidToast = () => {
  return (
    <div className="relative rounded-md border border-neutral-800 bg-neutral-900/80 p-2 transition-transform hover:scale-[1.005] hover:bg-neutral-900">
      <div className="relative h-52 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/projects/solid_toast_bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/50 bg-white/20 p-2 pl-2.5 backdrop-blur-md">
          <img
            src="/imgs/projects/solid_toast_logo.webp"
            alt="Solid Toast Logo"
            className="w-16"
          />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        <a href="https://solid-toast.com" target="_blank">
          <span className="absolute inset-0"></span>
          <span className="relative hover:underline">Solid Toast</span>
        </a>
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        <dt className="sr-only">Project Type</dt>
        <dd>Open Source</dd>
      </div>
      <div className="flex px-1 pb-1 pt-2 text-sm text-neutral-400">
        <dt className="sr-only">Project Description</dt>
        <dd>
          A lightweight, easy-to-use library for adding customizable toast
          notifications to your SolidJS apps. With a tiny bundle size and
          ready-to-use default toasts, it's perfect for getting users up and
          running fast!
        </dd>
      </div>
    </div>
  );
};

const TanstackSolidQuery = () => {
  return (
    <div className="relative rounded-md border border-neutral-800 bg-neutral-900/80 p-2 transition-transform hover:scale-[1.005] hover:bg-neutral-900">
      <div className="relative h-56 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/projects/solid_query_bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/20 bg-blue-50/10 p-1.5 contrast-125 backdrop-blur">
          <img
            src="/imgs/projects/solid_js_logo.webp"
            alt="SolidJS Logo"
            className="w-16"
          />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        <a
          href="https://www.npmjs.com/package/@tanstack/solid-query"
          target="_blank"
        >
          <span className="absolute inset-0"></span>
          <span className="relative hover:underline">TanStack Solid Query</span>
        </a>
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        <dt className="sr-only">Project Type</dt>
        <dd>Open Source</dd>
      </div>
      <div className="flex px-1 pb-1 pt-2 text-sm text-neutral-400">
        <dt className="sr-only">Project Description</dt>
        <dd>
          Developed and maintain Solid Query, the SolidJS version of Tanstack
          Query, a powerful async state manager for handling API queries and
          async functions. Solid Query runs isomorphically, meaning it works
          seamlessly on both the server and client — enabling server-side
          rendering on first load and fast future navigations with cached data.
        </dd>
      </div>
    </div>
  );
};

const GlobalNOC = () => {
  return (
    <div className="relative rounded-md border border-neutral-800 bg-neutral-900/80 p-2 transition-transform hover:scale-[1.005] hover:bg-neutral-900">
      <div className="relative h-64 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/projects/grnoc_bg.webp"
          alt="Placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/20 bg-black/40 p-2 py-2.5 backdrop-blur">
          <img
            src="/imgs/projects/grnoc_logo.webp"
            alt="Placeholder"
            className="w-16"
          />
        </div>
      </div>
      <div className="px-1 pt-4 font-editorial text-2xl">
        <Link to="/resume">
          <span className="absolute inset-0"></span>
          <span className="relative hover:underline">GlobalNOC</span>
        </Link>
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        <dt className="sr-only">Project Type</dt>
        <dd>Full Time</dd>
      </div>
      <div className="flex px-1 pb-1 pt-2 text-sm text-neutral-400">
        <dt className="sr-only">Project Description</dt>
        <dd>
          Worked full-time as a full-stack engineer, focusing on frontend
          technologies. Led the development of GlobalNOC's design system and
          networking layer, creating high-performance, type-safe web
          applications.
        </dd>
      </div>
    </div>
  );
};

const LWJ = () => {
  return (
    <div className="relative rounded-md border border-neutral-800 bg-neutral-900/80 p-2 transition-transform hover:scale-[1.005] hover:bg-neutral-900">
      <div className="relative h-52 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
        <img
          src="/imgs/projects/lwj_bg.webp"
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
        <a href="https://www.youtube.com/watch?v=3Iz3D7cVi04" target="_blank">
          <span className="absolute inset-0"></span>
          <span className="relative hover:underline">
            Learn With Jason Show
          </span>
        </a>
      </div>
      <div className="flex px-1 text-sm uppercase text-neutral-400">
        Interview
      </div>
      <div className="flex px-1 pb-1 pt-2 text-sm text-neutral-400">
        Had a fun chat with Jason Lengstorf on the Learn With Jason show,
        demoing the magic of Astro Islands and the framework-agnostic core of
        Tanstack Query. We built an app using React, SolidJS, Vue, and Svelte
        components, all sharing the same query cache. API data was deduped
        across all components, making updates super efficient and smooth.
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
