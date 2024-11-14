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
        <h1 className="font-editorial text-4xl">Assignment 2</h1>
        <p className="text-neutral-400">4th November 2024</p>
      </div>
      <div className="flex h-[450px] justify-center">
        <div className="relative flex w-full max-w-2xl items-center bg-white p-3">
          <img src="/imgs/tswd/a2/1.png" alt="Cover" className="" />
        </div>
      </div>
      <div className="pb-8 pt-16">
        <h2 className="font-editorial text-4xl">Heat Map</h2>
      </div>
      <div
        className="tableauPlaceholder"
        id="viz1730779660039"
        style={{ position: "relative" }}
        ref={(node) => {
          if (node) {
            const divElement = node;
            const vizElement = divElement.getElementsByTagName("object")[0];
            vizElement.style.width = "100%";
            vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
            const scriptElement = document.createElement("script");
            scriptElement.src =
              "https://public.tableau.com/javascripts/api/viz_v1.js";
            vizElement.parentNode!.insertBefore(scriptElement, vizElement);
          }
        }}
      >
        <object
          className="tableauViz"
          style={{
            display: "none",
          }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />{" "}
          <param name="embed_code_version" value="3" />{" "}
          <param name="site_root" value="" />
          <param name="name" value="Assignment2_17307796164100&#47;Sheet2" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;As&#47;Assignment2_17307796164100&#47;Sheet2&#47;1.png"
          />{" "}
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
      <div className="pb-8 pt-16">
        <h2 className="font-editorial text-4xl">Custom Visualization</h2>
      </div>
      <div
        className="tableauPlaceholder"
        id="viz1730780450893"
        style={{ position: "relative" }}
        ref={(node) => {
          if (node) {
            const divElement = node;
            const vizElement = divElement.getElementsByTagName("object")[0];
            vizElement.style.width = "100%";
            vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
            const scriptElement = document.createElement("script");
            scriptElement.src =
              "https://public.tableau.com/javascripts/api/viz_v1.js";
            vizElement.parentNode!.insertBefore(scriptElement, vizElement);
          }
        }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Sheet 3 "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;As&#47;Assignment2_17307796164100&#47;Sheet3&#47;1_rss.png"
              style={{
                border: "none",
              }}
            />
          </a>
        </noscript>
        <object
          className="tableauViz"
          style={{
            display: "none",
          }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />{" "}
          <param name="embed_code_version" value="3" />{" "}
          <param name="site_root" value="" />
          <param name="name" value="Assignment2_17307796164100&#47;Sheet3" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;As&#47;Assignment2_17307796164100&#47;Sheet3&#47;1.png"
          />{" "}
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>{" "}
      <div className="pb-8 pt-16">
        <h2 className="font-editorial text-4xl">Write-Up</h2>
      </div>
      <div className="space-y-4 pb-16 text-base text-neutral-300/90">
        <p>
          The heat map visualization shows the trend of debt-to-GDP ratios for
          various countries over the years. We can see that the ratio increases
          for most countries between 2011 and 2014, likely due to the effects of
          the 2008 financial crisis. After 2014, the ratio generally begins to
          decrease for most countries.
        </p>
        <p>
          For my custom visualization, I compared the debt-to-GDP ratio for the
          last three years in the dataset by calculating the average for 2017,
          2018, and 2019. I used a tree map to highlight which countries had the
          highest average ratios over these years. The tree map shows that Japan
          had the highest average ratio across this period. This layout also
          makes it easy to compare ratios by looking at the size of each
          country’s area. For instance, Japan’s area is about four times the
          size of Sweden’s, showing its significantly higher ratio. I also
          adjusted the color scheme: countries well above the 100% mark are
          shaded in red, while those well below are in green, making it easy to
          spot the countries with the highest and lowest ratios at a glance.
        </p>
      </div>
    </div>
  );
};

export default Home;
