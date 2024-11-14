import { Link } from "@remix-run/react";
import React from "react";
import { BannerClientOnly } from "~/components/Banner";

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
              effectively highlights demographic trends, such as the higher
              Venmo usage among younger adults and Cash App's popularity among
              specific groups. The chart is well-structured and the data is
              presented in a straightforward manner, making it accessible
              without overwhelming the viewer.
            </p>
            <p>
              However, there are areas for improvement. The predominant use of
              blue could be diversified by incorporating each app's brand
              colors, aiding in quick recognition and association. While bar
              charts are effective, employing circular radar graphs could more
              clearly depict differences across demographics, offering a more
              intuitive comparison. Additionally, dividing the visualization
              into two distinct sections—one for age and one for race—would
              streamline the presentation, allowing for focused analysis of each
              demographic factor.
            </p>
            <p>
              Evaluating the visualization using Stephen Few's Data
              Visualization Effectiveness Profile reveals that it provides
              valuable insights into demographic usage patterns, aiding
              understanding of market segmentation. The data appears accurately
              represented without distortion, and the straightforward design
              supports easy navigation. However, incorporating brand colors and
              alternative chart types could enhance immediate comprehension and
              visual appeal. While informative, the visualization could be more
              captivating with interactive elements or storytelling components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
