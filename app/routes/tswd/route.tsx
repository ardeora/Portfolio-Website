import { Link } from "@remix-run/react";
import React from "react";
import { BannerClientOnly } from "~/components/Banner";

const Home = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col text-neutral-300">
      <BannerClientOnly />

      <div className="mt-24 px-6">
        <div className="text-lg uppercase text-neutral-400">About Me</div>
        <div className="mt-6 space-y-7 text-base text-neutral-300/90">
          <p>
            I'm Aryan, a frontend engineer and a graduate student at Carnegie
            Mellon University, pursuing a Master’s in Information Systems
            Management. I’m set to graduate in August 2025. My passion for the
            web goes way back—I’ve always been fascinated by how it connects
            people and makes knowledge accessible. I’m an open-source
            enthusiast, actively contributing to projects that push web
            technologies forward. I love creating tools that simplify the web
            for developers and enhance user experiences.
          </p>
        </div>
      </div>

      <div className="mt-12 px-6">
        <div className="text-lg uppercase text-neutral-400">
          What I Hope To Learn
        </div>
        <div className="mt-6 space-y-7 text-base text-neutral-300/90">
          <p>
            During my undergrad years at business school, I developed a
            fascination for data visualization, sparked by the storytelling
            brilliance of{" "}
            <a
              href="https://pudding.cool/"
              target="_blank"
              className="text-nav-2-600 underline"
            >
              pudding.cool
            </a>
            's articles. I was especially blown away by{" "}
            <a
              href="https://pudding.cool/2017/05/song-repetition/"
              target="_blank"
              className="text-nav-2-600 underline"
            >
              <em>Are Pop Lyrics Getting More Repetitive?</em>
            </a>
            , where software engineer Collin Morris used engaging visualizations
            to reveal trends in pop music lyrics. Inspired by such creative data
            narratives, I’m excited to dive into the Telling Stories with Data
            course. I aim to master effective data visualization techniques and
            enhance my ability to craft compelling stories through data.
          </p>
        </div>
      </div>

      <div className="mt-12 px-6 pb-36">
        <div className="text-lg uppercase text-neutral-400">Portfolio</div>
        <div className="mt-6 grid grid-cols-1 gap-4 text-base text-neutral-300/90 948:grid-cols-3">
          <Link
            to="./assignment-2"
            className="flex min-h-56 flex-col gap-4 rounded-md border border-neutral-800 bg-neutral-900 p-2"
          >
            <div className="relative min-h-56 bg-white p-4">
              <img
                src="/imgs/tswd/a2/1.png"
                alt="Cover"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-medium">Assignment 2</p>
              <p className="text-neutral-400">4th November 2024</p>
              {/* <p className="pt-2 text-sm"></p> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
