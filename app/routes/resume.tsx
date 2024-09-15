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
    <div className="mx-auto flex max-w-4xl flex-1 flex-col text-neutral-300 1024:max-w-6xl">
      <div className="mt-16 flex flex-col gap-12 px-6 1024:flex-row 1024:gap-24">
        <div className="flex-1">
          <h1 className="font-editorial text-5xl leading-tight text-neutral-200">
            Resume
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've always been fascinated by the web. As a kid, I had this old,
              underpowered PC, and while I bought a few games, they’d barely run
              at 4fps—so gaming wasn’t really an option. But even on that basic
              computer, I could access any website in the world. I’d come home
              from school and spend hours glued to my screen, learning how to
              jailbreak my iPod Touch (RIP) or designing posters of my favorite
              artists in Photoshop, throwing in every wild effect I could find.
            </p>
            <p>
              What I love most about the web is how open it is. It’s everywhere,
              and that’s what pulled me into software engineering. Building for
              the web was simple—I didn’t need much to get started. Just an
              HTML, CSS, and JavaScript file, and I could have a website up and
              running. No compilers, no heavy SDKs—just three files, and I was
              good to go. Debugging was a breeze too. If something didn’t look
              right, I could inspect the element or tweak the CSS in the
              browser. If my code wasn’t working, I could throw in a console log
              and figure it out right there. It was so satisfying to be able to
              see what I was creating and share it with others instantly. Within
              a few weeks, I was recreating websites and apps I used daily, and
              that’s the real power of web technologies.
            </p>
            <p>
              But as the web evolves, so does the complexity of building for it.
              These days, you need more tools and setups—bundlers, new languages
              that compile to JavaScript, and code that runs both in the browser
              and on the server. It feels like the easy, accessible web I loved
              is becoming more complicated. And while the web has gotten faster
              and more powerful, the tools to understand and debug all this
              complexity haven’t quite kept up.
            </p>
            <p>
              This is where my passion lies. I want to help build the next
              generation of tools that make the modern web easier to
              understand—especially for new developers. I believe you should be
              able to deeply learn how today’s web frameworks work while still
              keeping things simple and fun.
            </p>

            <p>
              Right now, I’m working on the TanStack Start Devtools, helping
              developers see exactly what parts of their code run on the server
              and what gets sent to the browser. My goal is to help people learn
              the foundations of web technologies while creating faster, more
              delightful user experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 px-6">
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
                src="/imgs/cmu-wordmark.webp"
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
                src="/imgs/iu-wordmark.webp"
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
                src="/imgs/projects/grnoc_logo.webp"
                alt=""
              />
              <img
                className="w-[60%]"
                src="/imgs/projects/grnoc_logo.webp"
                alt="GlobalNOC"
              />
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
                src="/imgs/projects/grnoc_logo.webp"
                alt=""
              />
              <img
                className="w-[60%]"
                src="/imgs/projects/grnoc_logo.webp"
                alt="GlobalNOC"
              />
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
      </div>
    </div>
  );
}
