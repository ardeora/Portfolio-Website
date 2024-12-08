import { json, Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { BannerClientOnly } from "~/components/Banner";

import { ClientOnly } from "remix-utils/client-only";
import { requireAuthCookie } from "~/lib/utils/auth";
import { LoaderFunctionArgs } from "@remix-run/node";
import Page from "~/components/Story";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-6 text-neutral-300">
      <div className="py-12">
        <Link
          to="/tswd"
          className="inline-flex items-center gap-0.5 pb-4 text-neutral-400 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 18-6-6 6-6"
            ></path>
          </svg>{" "}
          Go Back
        </Link>
        <h1 className="pb-1 text-4xl font-semibold">Final Project Part 3</h1>
        <p className="text-neutral-400">7th December 2024</p>
        <p className="text-neutral-400">
          <Link to="/tswd/final-project-3" className="text-nav-4-600 underline">
            Final Data Story Link
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-8 pb-12">
        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Narrowing the Focus for the Data Story
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              For the first part of my final project, I struggled to find a
              clear direction for my data story. I had gathered information on
              TikTok’s influence on viral songs, but I wasn’t sure how to
              transform it into a compelling narrative.
            </p>

            <p>
              For the second part, I decided to change my approach and focus on
              a new, more personally intriguing topic. I’ve always been
              fascinated by color theory and its relationship to film, so I’m
              now interested in exploring how color theory influences movie
              poster design. In particular, I want to investigate whether
              certain film genres are consistently represented by specific color
              palettes.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            New Topic New Challenges: Collecting Data
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              The new topic presented its own challenges right from the start.
              My biggest hurdle was data collection. I couldn’t find a single,
              neatly organized dataset linking movies to their posters and
              dominant color schemes.
            </p>

            <p>
              That’s when I turned to{" "}
              <a
                href="https://letterboxd.com/"
                target="_blank"
                className="text-nav-4-600 underline"
              >
                Letterboxd
              </a>
              . I had recently used it for Thanksgiving movie recommendations
              and was impressed by how it encourages users to log films they’ve
              watched and contribute detailed reviews. Even more appealing was
              its community-driven approach: fans create meticulously curated
              lists sorted by genre, mood, theme, and even color. This became my
              starting point. I tapped into these color-themed lists to gather
              my movie poster data. For the second part of the project, I ended
              up compiling information on approximately 1,800 films sorted into
              red, blue, green, yellow, purple, pink, and orange color palettes.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Part 2: Wireframes and Feedback
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              I used the data I had collected to create initial visualizations
              and wireframes, then shared them with my friends from the design
              school. Their feedback proved incredibly helpful.
            </p>

            <p>
              They noted that my charts were visually overwhelming, with too
              many colors that made it hard to distinguish each movie poster’s
              genre. They suggested using fewer colors to create stronger visual
              contrasts.
            </p>

            <p>
              Another issue I discovered was that my dataset was unbalanced: of
              the 1,800 movies collected, about 500 were dominated by red, while
              only around 80 featured purple palettes. This imbalance skewed the
              visualizations toward red posters. To address this, I chose to
              focus on just four core colors—red, blue, yellow, and green—and
              ensured that I collected 100 movie posters for each. The result
              was a set of much clearer, more balanced data visualizations that
              effectively highlighted which genres corresponded to which color
              schemes. They ultimately ended up telling a more coherent story on
              their own.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Putting it all together
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              Now, I felt prepared to present my data story more effectively. I
              began by introducing the idea that filmmakers use color palettes
              within movies to convey a character’s mood without relying on
              dialogue. To illustrate this, I showed a carousel of moving stills
              from La La Land, highlighting how its various hues shift
              throughout the film.
            </p>

            <p>
              Next, I encouraged viewers to consider that color theory might not
              start and end with what’s on screen. What if the same principles
              influencing a film’s use of color also guide the creation of its
              poster, long before an audience even sees the movie?
            </p>

            <p>
              To explore this idea, I developed a scrollytelling example using
              the GSAP JavaScript animation library. I presented three movie
              posters, each featuring an eye with a silhouette facing it.
              Although the composition was the same, I varied the color
              schemes—red, blue, and yellow—to prompt viewers to reflect on how
              those different palettes altered their emotional response.
            </p>

            <p>
              Finally, I emphasized how color can evoke strong emotions and how
              certain hues are often associated with particular feelings. I then
              shared the results from my dataset, illustrating how different
              colors tend to align with specific film genres. In doing so, I
              aimed to underscore the profound influence that color palettes can
              have, not only on how we experience a film’s narrative but also
              how we perceive it before it even begins.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Identifying the audience
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              This data story was developed for film and design students, as
              well as movie studio executives, who are curious about how color
              can shape audience perceptions and evoke emotions. By
              understanding which colors resonate with certain genres, they can
              better leverage visual storytelling to engage viewers before a
              film even begins. That’s why, as a final takeaway, I provided a
              curated set of color palettes for each hue. This resource can
              serve as a starting point for students exploring new projects, and
              for executives looking to strengthen their movie marketing
              strategies through the power of color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
