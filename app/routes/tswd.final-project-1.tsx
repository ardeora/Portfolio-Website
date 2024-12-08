import { Link } from "@remix-run/react";
import React from "react";
import { BannerClientOnly } from "~/components/Banner";

import { ClientOnly } from "remix-utils/client-only";

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
        <h1 className="pb-1 text-4xl font-semibold">Final Project Part 1</h1>
        <p className="text-neutral-400">20th November 2024</p>
        <p className="text-neutral-400">
          <Link to="/tswd/final-project-3" className="text-nav-4-600 underline">
            Final Data Story Link
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-8 pb-12">
        <div>
          <h2 className="pb-1 text-2xl font-semibold">Project Outline</h2>
          <div className="flex flex-col gap-2">
            <p>
              Over the last few years, I've become a big fan of TikTok, spending
              hours enjoying the fun and creative videos on the app. One thing
              that always catches my eye is how certain songs blow up on TikTok.
              People make dances or use these songs in their videos, and the
              tunes get stuck in my head. Then, after a few weeks, I notice
              these songs popping up on my Spotify playlists and climbing the
              Billboard Hot 100 chart.
            </p>
            <p>
              For my final project, I want to look into this more. I plan to
              explore how a song's popularity on TikTok helps it succeed on
              music charts like the Billboard Hot 100. Specifically, I'll
              analyze the link between a song being big on TikTok and how it
              performs on the charts. I also want to find out how many songs
              that get famous on TikTok end up on the Billboard Hot 100.
            </p>
            <p>
              The story I want to tell is about how social media platforms like
              TikTok are influencing the music industry. I'll show how TikTok
              has become a launchpad for new music, changing how songs become
              popular and reach mainstream audiences. By looking at data and
              examples of specific songs, I'll highlight the journey from TikTok
              fame to topping the charts.
            </p>
            <p>
              By focusing on this trend, I hope to provide useful insights into
              today's music scene. My project aims to inform artists, producers,
              and others in the industry about the importance of social media in
              promoting music. Ultimately, I want to inspire new musicians to
              use platforms like TikTok to boost their careers.
            </p>
            <p>
              As a final takeaway from my story, I want to encourage aspiring
              music artists not to overlook TikTok. Don't underestimate how much
              this platform can boost your music career. TikTok can be an
              amazing launchpad for your journey in music. By sharing your songs
              there, you can reach a huge audience, get your music noticed, and
              maybe even see it climb the charts. So, make sure to include
              TikTok in your plans, it could be the key to kickstarting your
              music career.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Sketches</h2>
          <div className="flex flex-col gap-2">
            <p>
              Here are some of the wireframe sketches of what the final project
              website might look like.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid max-w-lg grid-cols-1 gap-4 pt-4">
            <img
              src="/imgs/tswd/a4/1.png"
              alt="Redesign Sketch"
              className="rounded-md object-contain"
            />

            <img
              src="/imgs/tswd/a4/2.png"
              alt="Redesign Sketch"
              className="rounded-md object-contain"
            />

            <img
              src="/imgs/tswd/a4/3.png"
              alt="Redesign Sketch"
              className="rounded-md object-contain"
            />

            <img
              src="/imgs/tswd/a4/4.png"
              alt="Redesign Sketch"
              className="rounded-md object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Data</h2>
          <div className="flex flex-col gap-2">
            <p>
              Here are some of the publicly available datasets that I plan to
              use for my final project.
            </p>
            <ol className="list-inside list-decimal pl-4 [&>li]:pb-2">
              <li>
                <a
                  href="https://www.kaggle.com/datasets/sveta151/tiktok-popular-songs-2019"
                  target="_blank"
                  className="text-nav-4-600 underline"
                >
                  TikTok popular songs 2019
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/datasets/sveta151/tiktok-popular-songs-2020"
                  target="_blank"
                  className="text-nav-4-600 underline"
                >
                  TikTok popular songs 2020
                </a>
              </li>

              <li>
                <a
                  href="https://www.kaggle.com/datasets/sveta151/tiktok-popular-songs-2021"
                  target="_blank"
                  className="text-nav-4-600 underline"
                >
                  TikTok popular songs 2021
                </a>
              </li>

              <li>
                <a
                  href="https://www.kaggle.com/datasets/sveta151/tiktok-popular-songs-2022"
                  target="_blank"
                  className="text-nav-4-600 underline"
                >
                  TikTok popular songs 2022
                </a>
              </li>

              <li>
                <a
                  href="https://www.kaggle.com/datasets/sujaykapadnis/top-100-billboard/data"
                  target="_blank"
                  className="text-nav-4-600 underline"
                >
                  Billboard Top 100 songs
                </a>
              </li>
            </ol>

            <p>
              I plan to use these datasets to analyze the popularity of songs on
              TikTok and how they perform on the Billboard Hot 100 chart. I will
              also use the data to identify trends and patterns in the music
              industry and to create visualizations that show the relationship
              between TikTok popularity and chart success.
            </p>

            <p>
              I still need to find more datasets that show when the song was
              released, how long it took to get popular on TikTok, and when it
              entered the Billboard Hot 100 chart. This part is still in
              progress. I have found a website called Chartmetric that provides
              data on when songs were released and when they entered the charts.
              But to access the data I need to sign up for a premium account
              that costs about 160 USD per month. I am still looking for other
              sources that provide this data for free.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Method and medium</h2>
          <div className="flex flex-col gap-2">
            <p>
              For the method of storytelling. I plan to use shorthand to present
              the story and I plan to use JavaScript and data visualization
              libraries like d3.js to create interactive charts and graphs. I
              will also use HTML, CSS, and JavaScript to create a website where
              I can present my story. I will use the website to present the data
              and analysis I have collected and to showcase the interactive
              charts and graphs I have created. I will also use the website to
              present the story I have created and to provide additional
              information and context for the data and analysis I have
              collected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = {
  labels: ["White", "Black", "Hispanic", "Asian"],
  datasets: [
    {
      label: "Zelle",
      data: [29, 45, 54, 65],
      fill: true,
      backgroundColor: "rgba(113, 36, 213, 0)",
      borderColor: "#8439ee",
      pointBackgroundColor: "#925bf7",
      pointBorderColor: "#c7b4fe",
      pointHoverBackgroundColor: "#c7b4fe",
      pointHoverBorderColor: "#925bf7",
    },
    {
      label: "PayPal",
      data: [58, 51, 52, 70],
      fill: true,
      backgroundColor: "rgba(23, 55, 162, 0)",
      borderColor: "#1456fc",
      pointBackgroundColor: "#2b78ff",
      pointBorderColor: "#8ac1ff",
      pointHoverBackgroundColor: "#8ac1ff",
      pointHoverBorderColor: "#2b78ff",
    },
    {
      label: "Venmo",
      data: [41, 21, 33, 47],
      fill: true,
      backgroundColor: "rgba(21, 140, 255, 0)",
      borderColor: "#158cff",
      pointBackgroundColor: "#28a7ff",
      pointBorderColor: "#88dbff",
      pointHoverBackgroundColor: "#88dbff",
      pointHoverBorderColor: "#28a7ff",
    },
    {
      label: "Cash App",
      data: [17, 59, 37, 16],
      fill: true,
      backgroundColor: "rgba(32, 215, 60, 0)",
      borderColor: "#12a729",
      pointBackgroundColor: "#20d73c",
      pointBorderColor: "#83f293",
      pointHoverBackgroundColor: "#83f293",
      pointHoverBorderColor: "#20d73c",
    },
  ],
};

const AgeGraph = () => {
  const chartRef = React.useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "radar",
            data,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart"
    ></canvas>
  );
};

const datae1 = {
  labels: ["White", "Black", "Hispanic", "Asian"],
  datasets: [
    {
      label: "PayPal",
      data: [58, 51, 52, 70],
      fill: true,
      backgroundColor: "rgba(23, 55, 162, 0)",
      borderColor: "#1456fc",
      pointBackgroundColor: "#2b78ff",
      pointBorderColor: "#8ac1ff",
      pointHoverBackgroundColor: "#8ac1ff",
      pointHoverBorderColor: "#2b78ff",
    },
    {
      label: "Venmo",
      data: [41, 21, 33, 47],
      fill: true,
      backgroundColor: "rgba(21, 140, 255, 0)",
      borderColor: "#158cff",
      pointBackgroundColor: "#28a7ff",
      pointBorderColor: "#88dbff",
      pointHoverBackgroundColor: "#88dbff",
      pointHoverBorderColor: "#28a7ff",
    },
  ],
};

const AgeGraphE1 = () => {
  const chartRef = React.useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "radar",
            data: datae1,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e1"
    ></canvas>
  );
};

const datae2 = {
  labels: ["White", "Black", "Hispanic", "Asian"],
  datasets: [
    {
      label: "Zelle",
      data: [null, 45, null, null],
      fill: true,
      backgroundColor: "rgba(113, 36, 213, 0)",
      borderColor: "#8439ee",
      pointBackgroundColor: "#925bf7",
      pointBorderColor: "#c7b4fe",
      pointHoverBackgroundColor: "#c7b4fe",
      pointHoverBorderColor: "#925bf7",
    },
    {
      label: "PayPal",
      data: [null, 51, null, null],
      fill: true,
      backgroundColor: "rgba(23, 55, 162, 0)",
      borderColor: "#1456fc",
      pointBackgroundColor: "#2b78ff",
      pointBorderColor: "#8ac1ff",
      pointHoverBackgroundColor: "#8ac1ff",
      pointHoverBorderColor: "#2b78ff",
    },
    {
      label: "Venmo",
      data: [null, 21, null, null],
      fill: true,
      backgroundColor: "rgba(21, 140, 255, 0)",
      borderColor: "#158cff",
      pointBackgroundColor: "#28a7ff",
      pointBorderColor: "#88dbff",
      pointHoverBackgroundColor: "#88dbff",
      pointHoverBorderColor: "#28a7ff",
    },
    {
      label: "Cash App",
      data: [null, 59, null, null],
      fill: true,
      backgroundColor: "rgba(32, 215, 60, 0)",
      borderColor: "#12a729",
      pointBackgroundColor: "#20d73c",
      pointBorderColor: "#83f293",
      pointHoverBackgroundColor: "#83f293",
      pointHoverBorderColor: "#20d73c",
    },
  ],
};

const AgeGraphE2 = () => {
  const chartRef = React.useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "radar",
            data: datae2,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

export const AgeGraphE2ClientOnly = () => {
  return <ClientOnly>{() => <AgeGraphE2 />}</ClientOnly>;
};

export const AgeGraphE1ClientOnly = () => {
  return <ClientOnly>{() => <AgeGraphE1 />}</ClientOnly>;
};

export const AgeGraphClientOnly = () => {
  return <ClientOnly>{() => <AgeGraph />}</ClientOnly>;
};

export default Home;
