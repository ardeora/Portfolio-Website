import type { MetaFunction } from "@remix-run/node";
import {
  SiApache,
  SiAstro,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPuppet,
  SiPython,
  SiReact,
  SiRemix,
  SiSolana,
  SiSolid,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "Aryan Deora | About Me" },
    {
      name: "description",
      content: "UI Engineer with a passion for design and open source.",
    },
  ];
};

export default function About() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col text-neutral-300 1024:max-w-6xl">
      <div className="mt-16 flex flex-col gap-12 px-6 1024:flex-row 1024:gap-24">
        <div className="relative h-[25rem] w-[20rem] overflow-hidden rounded-md border-2 border-nav-4-800 bg-neutral-900 1024:hidden">
          <img
            src="/imgs/bear.png"
            alt="a cute bear, my spirit animal"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="font-editorial text-5xl leading-tight text-neutral-200">
            I’m Aryan Deora. <br />I live in Pittsburgh, where I design the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div>
        <div className="hidden flex-col gap-12 1024:flex">
          <div className="relative h-[30rem] w-[24rem] overflow-hidden rounded-md border-2 border-nav-4-800 bg-neutral-900">
            <img
              src="/imgs/bear.png"
              alt="a cute bear, my spirit animal"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <ul role="list">
            <li className="flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
                href="#"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
                <span className="ml-4">Follow on Twitter</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
                href="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
                >
                  <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                  <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                </svg>
                <span className="ml-4">Follow on Instagram</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
                href="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                  ></path>
                </svg>
                <span className="ml-4">Follow on GitHub</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
                href="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
                <span className="ml-4">Follow on LinkedIn</span>
              </a>
            </li>
            <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
                href="mailto:spencer@planetaria.tech"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                  ></path>
                </svg>
                <span className="ml-4">hi@aryandeora.com</span>
              </a>
            </li>
          </ul>
        </div>

        <ul role="list" className="block pb-36 1024:hidden">
          <li className="flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
              href="#"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
              <span className="ml-4">Follow on Twitter</span>
            </a>
          </li>
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
              href="#"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
              >
                <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
              </svg>
              <span className="ml-4">Follow on Instagram</span>
            </a>
          </li>
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
              href="#"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
              <span className="ml-4">Follow on GitHub</span>
            </a>
          </li>
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
              href="#"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
              <span className="ml-4">Follow on LinkedIn</span>
            </a>
          </li>
          <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-nav-2-500 dark:text-zinc-200 dark:hover:text-nav-2-500"
              href="mailto:spencer@planetaria.tech"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-nav-2-500"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                ></path>
              </svg>
              <span className="ml-4">hi@aryandeora.com</span>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="mt-24 px-6">
        <div className="text-lg uppercase text-neutral-400">Skills</div>
        <div className="flex flex-wrap gap-4 pt-4 text-neutral-400">
          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiTypescript className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">TypeScript</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiReact className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">React</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiTailwindcss className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">Tailwind CSS</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiNextdotjs className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">NextJS</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiRemix className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Remix</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiAstro className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Astro</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiSolid className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">SolidJS</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiSolana className="h-4 w-4 rotate-12" />
              </div>
            </div>
            <div className="relative font-medium">SolidStart</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiExpress className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">ExpressJS</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiDrizzle className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">Drizzle</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiPython className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Python</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiFlask className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Flask</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiFastapi className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">FastAPI</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <FaJava className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">Java</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiMysql className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">MySQL</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiPostgresql className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">Postres</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiDocker className="h-5 w-5" />
              </div>
            </div>
            <div className="relative font-medium">Docker</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiPuppet className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Puppet</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiApache className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Apache</div>
          </div>

          <div className="relative flex h-11 items-center gap-3 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 pl-2 pr-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-800">
              <div className="">
                <SiNginx className="h-4 w-4" />
              </div>
            </div>
            <div className="relative font-medium">Nginx</div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-6">
        <div className="text-lg uppercase text-neutral-400">Education</div>
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex gap-6">
            <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-cmu-600 bg-gradient-to-b from-cmu-700 to-cmu-800">
              <img
                className="w-[82%]"
                src="/imgs/cmu-wordmark.svg"
                alt="Carnegie Mellon University"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-neutral-200">
                Carnegie Mellon University
              </div>
              <div className="text-sm text-neutral-400">
                Master of Information Systems Management
              </div>
              <div className="text-sm text-neutral-400">
                Software Development Track
              </div>
              <div className="text-sm text-neutral-400">2024 - 2025</div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-cmu-700 bg-gradient-to-b from-iu-800 to-iu-900">
              <img
                className="w-[42%]"
                src="/imgs/iu-wordmark.svg"
                alt="Indiana University"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-neutral-200">
                Indiana University
              </div>
              <div className="text-sm text-neutral-400">
                Bachelor of Science in Business (Information Systems)
              </div>
              <div className="text-sm text-neutral-400">
                Minor: Computer Science
              </div>
              <div className="text-sm text-neutral-400">2016 - 2020</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 px-6 pb-36">
        <div className="text-lg uppercase text-neutral-400">
          Work Experience
        </div>

        <div className="flex flex-col pt-4">
          <div className="flex gap-6">
            <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-neutral-700/40 bg-gradient-to-b from-neutral-800/80 to-neutral-900">
              <img
                className="absolute w-[60%] opacity-50 blur"
                src="/imgs/grnoc.png"
                alt=""
              />
              <img className="w-[60%]" src="/imgs/grnoc.png" alt="GlobalNOC" />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-neutral-200">
                GlobalNOC
              </div>
              <div className="text-sm text-neutral-400">Frontend Engineer</div>
              <div className="text-sm text-neutral-400">2022 - 2024</div>
            </div>
          </div>
          <div className="flex gap-6 pt-6 768:pt-0">
            <div className="relative hidden h-24 w-24 flex-shrink-0 flex-col items-center justify-center 768:flex"></div>
            <ul className="list-disc space-y-1 pl-3">
              <li className="text-sm text-neutral-400">
                Created an in-house communication layer, similar to TRPC,
                ensuring type safety between frontend (TypeScript + React) and
                backend (Python FastAPI) applications. This eliminated type
                duplication and also served as a centralised type definitions
                repository for streamlined development.
              </li>
              <li className="text-sm text-neutral-400">
                Successfully migrated a 13-year-old web application, originally
                built with YUI and JQuery, to a contemporary frontend stack. The
                transformation resulted in a 9.7 times improvement in load times
                and a 6x boost in data loading and updating speeds.
              </li>
              <li className="text-sm text-neutral-400">
                Spearheaded the development of GlobalNOC’s modern design system
                (20+ components) and a networking layer, resulting in
                high-performance and type-safe web applications.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <div className="flex gap-6">
            <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-neutral-700/40 bg-gradient-to-b from-neutral-800/80 to-neutral-900">
              <img
                className="absolute w-[60%] opacity-50 blur"
                src="/imgs/grnoc.png"
                alt=""
              />
              <img className="w-[60%]" src="/imgs/grnoc.png" alt="GlobalNOC" />
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-neutral-200">
                GlobalNOC
              </div>
              <div className="text-sm text-neutral-400">Systems Engineer</div>
              <div className="text-sm text-neutral-400">2020 - 2022</div>
            </div>
          </div>
          <div className="flex gap-6 pt-6 768:pt-0">
            <div className="relative hidden h-24 w-24 flex-shrink-0 flex-col items-center justify-center 768:flex"></div>
            <ul className="list-disc space-y-1 pl-3">
              <li className="text-sm text-neutral-400">
                Assisted in the development of an open-source framework (simp)
                to collect SNMP data from multiple network devices.
              </li>
              <li className="text-sm text-neutral-400">
                Developed a service enabling network engineers to subscribe to
                real-time incident alerts for their respective sites, enhancing
                network management during critical events.
              </li>
              <li className="text-sm text-neutral-400">
                Created an API to monitor network traffic at access points,
                contributing to crowd management efforts during the pandemic on
                the Indiana University campus.
              </li>
              <li className="text-sm text-neutral-400">
                Designed and developed Atlas, a JavaScript library, similar to
                tldraw, enabling customers to edit network maps and seamlessly
                integrate real-time network traffic visualisation onto these
                maps.
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}
