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
        <h1 className="pb-1 text-4xl font-semibold">Final Project Part 2</h1>
        <p className="text-neutral-400">27th November 2024</p>
        <p className="text-neutral-400">
          <a
            href="https://carnegiemellon.shorthandstories.com/movie-posters/index.html"
            className="text-nav-4-600 underline"
          >
            Shorthand Project Link
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-8 pb-12">
        <div>
          <h2 className="pb-1 text-2xl font-semibold">A Little Backtrack</h2>
          <div className="flex flex-col gap-2">
            <p>
              After getting feedback on the first part of my final project, I
              realized that to truly explore TikTok's impact on song popularity,
              I'd need to scrape private data from the platform, which isn't
              feasible. So, I've decided to switch topics.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            New Project: Movie Posters
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              I'm a huge movie buff and love design. I've spent countless hours
              admiring movie posters and even creating my own with my
              (admittedly scrappy) Photoshop skills. This got me thinking: how
              do the colors in movie posters stir our emotions? Is it possible
              to guess a movie's genre just by its poster's color scheme? Do
              certain genres lean towards specific colors in their posters? I'm
              excited to dive into this and see how color choices in movie
              posters connect with the film's genre and the feelings they aim to
              evoke.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Storyboard</h2>
          <div className="flex flex-col gap-2">
            <p>
              To kick off this story, I want to show different movie posters
              that all share a common theme: each features one person in the
              center of the image, but each poster uses a different color
              scheme. Then, I'll focus on each poster individually to highlight
              how the color might make the audience feel. For example, a red
              poster could create a sense of alertness or horror, while a yellow
              poster might give off a calm and peaceful vibe. An orange poster
              could evoke feelings of warmth and energy, and a pink one might
              suggest romance or playfulness.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src="/imgs/tswd/a5/1.png" alt="Movie Poster 1" />
            </div>

            <div>
              <img src="/imgs/tswd/a5/2.png" alt="Movie Poster 2" />
            </div>

            <div>
              <img src="/imgs/tswd/a5/3.png" alt="Movie Poster 3" />
            </div>

            <div>
              <img src="/imgs/tswd/a5/4.png" alt="Movie Poster 4" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <p>
              Then I will introduce the concept of color psychology and how
              different colors can evoke different emotions. I will use this
              information to analyze the color schemes of the movie posters and
              discuss how they might influence the audience's perception of the
              film. I will also explore how different genres use color to convey
              different moods and themes.
            </p>

            <p>
              Finally, I will create a visualization that shows the color
              distribution of movie posters in different genres. I will use this
              visualization to identify trends and patterns in the use of color
              in movie posters and to explore how color choices vary across
              different genres.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Data Visualization Examples: Color Red
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              For each color, I'll include a collage page filled with different
              movie posters that use that color prominently. This will help set
              the mood and prepare the audience for the visualizations that are
              about to follow.
            </p>

            <div>
              <img src="/imgs/tswd/a5/9.png" alt="Color Red" />
            </div>

            <p>
              Next, I'll display an image I created by collecting various movie
              posters that predominantly feature red in their color schemes. I
              took all these red movie posters, compressed them, and arranged
              them side by side. This image showcases the different shades of
              red used in movie posters.
            </p>

            <div>
              <img src="/imgs/tswd/a5/7.png" alt="Color Red" />
            </div>

            <p>
              I will then show a bar chart that shows the genre distribution of
              movie posters that use the color red. This chart will help
              illustrate how different genres use the color red in their movie
              posters.
            </p>

            <div>
              <img src="/imgs/tswd/a5/6.png" alt="Color Red" />
            </div>

            <p>
              Additionally, I'll include radar charts that showcase different
              movie genres and highlight which ones most often use red as the
              dominant color in their poster schemes. This will help illustrate
              which genres frequently feature red and how prevalent it is among
              them.
            </p>

            <div>
              <img src="/imgs/tswd/a5/8.png" alt="Color Red" />
            </div>

            <p>
              I'll repeat this process for other colors, such as blue, green,
              yellow, and so on, to show how different colors are used in movie
              posters across various genres.
            </p>

            <p>
              As for the call to action in the end, I still need to think about
              that.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Target audience</h2>
          <div className="flex flex-col gap-2">
            <p>
              I hope to reach anyone interested in visual storytelling—movie
              enthusiasts, designers, and people curious about the impact of
              color in media. My goal is to illustrate how color influences our
              perceptions and feelings, and how it plays a crucial role in
              setting the mood and expectations for a movie.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Interview script</h2>
          <div className="flex flex-col gap-2">
            <p>Here are some questions I plan to ask in my interviews:</p>

            <ol className="list-inside list-decimal">
              <li className="pb-1">
                <strong>Goal</strong>: Assess if the concept of using
                color-themed movie posters is engaging.
                <ul className="list-inside list-disc pl-4">
                  <li>
                    <strong>Question</strong>: What do you think about starting
                    the story with different movie posters that each feature one
                    person and a distinct color scheme? Does this idea grab your
                    interest?
                  </li>
                </ul>
              </li>

              <li className="pb-1">
                <strong>Goal</strong>: Understand if the radar charts add value
                to the story.
                <ul className="list-inside list-disc pl-4">
                  <li>
                    <strong>Question</strong>: Do the radar charts showing the
                    top movie genres that use red in their poster schemes help
                    you understand the prevalence of red in certain genres? Are
                    they helpful or distracting?
                  </li>
                </ul>
              </li>

              <li className="pb-1">
                <strong>Goal</strong>: Find out if the overall narrative is
                clear and engaging.
                <ul className="list-inside list-disc pl-4">
                  <li>
                    <strong>Question</strong>: After hearing about my story, do
                    you think the message about how color influences audience
                    emotions comes across clearly? Is there any part that feels
                    confusing or could be improved?
                  </li>
                </ul>
              </li>

              <li className="pb-1">
                <strong>Goal</strong>: Gather ideas on how to effectively
                conclude the presentation with a compelling call to action.
                <ul className="list-inside list-disc pl-4">
                  <li>
                    <strong>Question</strong>: I'm looking to create a strong
                    ending for my presentation. What suggestions do you have for
                    a call to action that would resonate with the audience and
                    reinforce the message about the impact of color in movie
                    posters?
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Interview insights and summary
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              I interviewed three different colleagues and friends and here are
              the summary findings from my interviews:
            </p>

            <ol className="list-inside list-decimal">
              <li className="pb-1">
                <strong>Question 1</strong>
                <ul className="list-inside list-disc pl-4">
                  <li>
                    The feedback indicates that beginning the story with
                    color-themed movie posters featuring a single person is
                    engaging and effective. All three friends agree that this
                    approach immediately captures attention and sets a clear
                    thematic tone. It piques interest by showcasing visually
                    striking images and makes the concept of exploring color and
                    emotion evident from the start.
                  </li>
                </ul>
              </li>

              <li className="pb-1">
                <strong>Question 2</strong>
                <ul className="list-inside list-disc pl-4">
                  <li>
                    Regarding the radar charts, the consensus is that they add
                    value by providing visual data that complements the theme.
                    They help illustrate the prevalence of certain colors in
                    specific movie genres, adding depth to the narrative.
                    However, it was difficult for all of them to interpret what
                    the ticks on the radar chart meant. Clarifying this would
                    make the visualizations more effective. They suggest adding
                    a legend or explanation to help viewers understand the data
                    better. They also reccomend only showing one radar chart at
                    a time to avoid overwhelming the audience.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Question 3</strong>
                <ul className="list-inside list-disc pl-4">
                  <li>
                    The overall narrative is perceived as clear and engaging,
                    effectively conveying the message about how color influences
                    audience emotions. While the main concept resonates, one
                    suggestion is to include more examples linking specific
                    colors to different genres to strengthen the point of the
                    story. They suggested that adding a summary section at the
                    end of each color deep dive that talks about the emotions
                    that color evokes and how it is used in movie posters would
                    be helpful. This will enable smooth transitions between
                    sections and will also help maintain clarity and make the
                    story easier to follow.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Question 4</strong>
                <ul className="list-inside list-disc pl-4">
                  <li>
                    For the call to action, they suggested creating an
                    interactive element that allows the audience to explore the
                    color schemes of their favorite movie posters. This could be
                    a quiz or a tool that lets users select a genre and see the
                    most common colors used in movie posters for that genre.
                    This interactive element will engage the audience and
                    reinforce the message about the impact of color in movie
                    posters.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">Final Presentation</h2>
          <div className="flex flex-col gap-2">
            <p>
              Based on the feedback from my interviews, I will make the
              following changes to my final presentation:
            </p>

            <ol className="list-inside list-decimal">
              <li className="pb-1">
                I will include a legend or explanation for the radar charts to
                help viewers understand the data better. I will also show only
                one radar chart at a time to avoid overwhelming the audience.
              </li>

              <li className="pb-1">
                I will add a summary section at the end of each color deep dive
                that talks about the emotions that color evokes and how it is
                used in movie posters. This will enable smooth transitions
                between sections and will also help maintain clarity and make
                the story easier to follow.
              </li>

              <div className="py-4">
                <img src="/imgs/tswd/a5/5.png" alt="Final Presentation" />
              </div>

              <li>
                I will create an interactive element that allows the audience to
                explore the color schemes of their favorite movie posters. This
                could be a quiz or a tool that lets users select a genre and see
                the most common colors used in movie posters for that genre.
                This interactive element will engage the audience and reinforce
                the message about the impact of color in movie posters.
              </li>
            </ol>
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
