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
        <h1 className="pb-1 text-4xl font-semibold">Assignment 3</h1>
        <p className="text-neutral-400">13th November 2024</p>
      </div>

      <div className="flex flex-col gap-8 pb-12">
        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Step 1: Choosing a data visualization
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              For this week's assignment I decided to choose a visualization
              from an article I read few months ago. The article is from the{" "}
              <a
                href="https://www.pewresearch.org/"
                target="_blank"
                className="text-nav-4-600 underline"
              >
                Pew Research Center
              </a>{" "}
              and it talks about the demographics of users on various payment
              applications.
            </p>
            <p>
              The visualization I chose focuses on how different demographics,
              like age, race, and income level, use popular payment apps such as
              PayPal, Venmo, Zelle, and Cash App. It highlights trends in usage,
              like how younger people prefer Venmo, while Cash App is more
              popular among lower-income and Black Americans. I found this data
              really interesting because it shows how preferences for financial
              technology vary widely across different groups, and the visual
              representation helped me quickly understand these patterns. The
              visualization I chose focuses on how different demographics, like
              age, race, and income level, use popular payment apps such as
              PayPal, Venmo, Zelle, and Cash App. It highlights trends in usage,
              like how younger people prefer Venmo, while Cash App is more
              popular among lower-income and Black Americans. I found this data
              really interesting because it shows how preferences for financial
              technology vary widely across different groups, and the visual
              representation helped me quickly understand these patterns.
            </p>

            <div className="flex justify-center py-4">
              <div className="flex max-w-sm flex-col gap-2">
                <img
                  src="/imgs/tswd/a3/1.png"
                  alt="Visualization"
                  className="w-full rounded-md"
                />
                <p className="text-center text-sm uppercase">
                  <a
                    href="https://www.pewresearch.org/short-reads/2022/09/08/payment-apps-like-venmo-and-cash-app-bring-convenience-and-security-concerns-to-some-users/"
                    target="_blank"
                    className="text-nav-4-600 underline"
                  >
                    Source: Pew Research Center, 2024.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Step 2: Critiquing the visualization
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              The Pew Research Center's visualization on payment app usage
              effectively highlights demographic trends, such as higher Venmo
              usage among younger adults and Cash App's popularity among
              specific groups. The chart is well-structured, featuring a
              descriptive title and appropriate spacing that visually groups the
              categories.
            </p>
            <p>
              However, the inclusion of multiple demographic groups in a single
              visualization increases cognitive load, making it challenging to
              discern how each payment app performs across different races and
              their overall popularity. Comparing bar charts across rows and
              columns can be mentally taxing. Focusing solely on payment app
              usage by race and employing a different visualization, such as a
              radar graph, could streamline the presentation and enhance
              clarity.
            </p>
            <p>
              Additionally, the current color scheme utilizes various shades of
              blue to represent frequencies. Incorporating the distinctive
              branding colors of each payment app - purple for Zelle, green for
              Cash App, and light or dark blue for Venmo and PayPal could
              improve active recall and association for each value.
            </p>
            <p>
              Evaluating the visualization using Stephen Few's Data
              Visualization Effectiveness Profile reveals that it provides
              valuable insights into demographic usage patterns, aiding in
              understanding market segmentation. The data appears accurately
              represented without distortion, and the straightforward design
              supports easy navigation. However, incorporating brand colors and
              alternative chart types could enhance immediate comprehension and
              visual appeal. While informative, the visualization could be more
              engaging with interactive elements or storytelling components.
            </p>
          </div>
        </div>

        <div>
          <h2 className="pb-1 text-2xl font-semibold">
            Step 3: Sketching out the redesign
          </h2>
          <div className="flex flex-col gap-2">
            <p>
              To enhance the Pew Research Center's visualization on payment app
              usage, I propose a redesign that incorporates brand colors,
              circular radar graphs, and a segmented layout. The redesigned
              visualization will offer a more engaging and intuitive
              presentation of demographic trends, facilitating quick
              comprehension and comparison across different groups.
            </p>
            <p>
              The redesign will feature separate radar graphs for each payment
              app, showcasing usage among White, Black, Hispanic, and Asian
              Americans. Each radar graph will display the frequency of app use
              among these demographic groups, with distinct colors representing
              Zelle, PayPal, Venmo, and Cash App. The circular layout will
              simplify comparisons and reduce cognitive load, enabling viewers
              to quickly identify usage patterns and preferences.
            </p>
            <p>
              Here is the initial sketch of the redesigned visualization,
              showcasing the proposed layout and design elements. The final
              version will incorporate additional details and will be
              interactive.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid max-w-lg grid-cols-1 gap-4 pt-4">
              <img
                src="/imgs/tswd/a3/3.png"
                alt="Redesign Sketch"
                className="rounded-md object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="pb-3 text-2xl font-semibold">
            Step 5: Final Redesign
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center gap-2 pb-3">
              <div className="relative w-[550px] rounded-md border border-neutral-800 bg-neutral-900 p-3 pb-0">
                <p className="text-balance text-center text-lg font-semibold leading-tight text-neutral-200">
                  Diverse Preferences: How Different Racial Demographics Choose
                  Their Payment Apps
                </p>
                <p className="pt-1 text-center text-sm">
                  <em>% of users who say use the following</em>
                </p>
                <ul className="absolute bottom-3 left-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#1456fc]"></span>
                    <span>PayPal</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#158cff]"></span>
                    <span>Venmo</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#8439ee]"></span>
                    <span>Zelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#12a729]"></span>
                    <span>Cash App</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <div className="h-[500px] w-[500px]">
                    <AgeGraphClientOnly />
                  </div>
                </div>
              </div>
            </div>

            <p>
              In the final redesign, I incorporated feedback from interviewees
              and merged all the visualizations into a single chart. This
              approach, I believe, strikes the perfect balance for displaying
              this data. The radar graph effectively illustrates the overall
              popularity of each payment app. For instance, you can clearly see
              that Venmo's ring is much smaller compared to PayPal’s,
              highlighting PayPal’s higher usage across all demographics.
            </p>
            <div className="flex justify-center gap-2 py-3">
              <div className="relative w-[550px] rounded-md border border-neutral-800 bg-neutral-900 p-3 pb-0">
                <ul className="absolute bottom-3 left-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#1456fc]"></span>
                    <span>PayPal</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#158cff]"></span>
                    <span>Venmo</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <div className="h-[500px] w-[500px]">
                    <AgeGraphE1ClientOnly />
                  </div>
                </div>
              </div>
            </div>

            <p>
              Another advantage of the radar graph is how effortlessly it ranks
              each app's popularity by race. For example, the simplified graph
              clearly shows that Cash App is most popular among Black Americans,
              followed by PayPal, Zelle, and then Venmo. This layout not only
              makes comparisons easy but also sparks curiosity, encouraging
              viewers to explore why these significant differences in payment
              app usage exist among racial groups.
            </p>
            <div className="flex justify-center gap-2 py-3">
              <div className="relative w-[550px] rounded-md border border-neutral-800 bg-neutral-900 p-3 pb-0">
                <ul className="absolute bottom-3 left-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#1456fc]"></span>
                    <span>PayPal</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#158cff]"></span>
                    <span>Venmo</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#8439ee]"></span>
                    <span>Zelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-[#12a729]"></span>
                    <span>Cash App</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <div className="h-[500px] w-[500px]">
                    <AgeGraphE2ClientOnly />
                  </div>
                </div>
              </div>
            </div>

            <p>
              Finally, using brand-specific colors for each ring enhances
              clarity and makes it easier to track each app throughout the
              graph.
            </p>

            <p>
              In the end, I’m very happy with how the final redesign turned out.
              I feel this new approach makes the data clearer, more engaging,
              and easier to understand. By merging everything into one cohesive
              chart, the radar graph highlights key trends and differences
              without overwhelming the viewer. The use of brand colors adds a
              layer of familiarity, making the information more memorable.
              Overall, this redesign strikes a good balance between being
              visually appealing and highly informative, and I’m confident it
              will help viewers grasp the insights more effectively.
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
