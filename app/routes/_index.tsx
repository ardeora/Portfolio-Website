import type { MetaFunction } from "@remix-run/node";
import { BannerClientOnly } from "~/components/Banner";
import { ProjectCards } from "~/components/ProjectCards";
import { TestClientOnly } from "~/components/Test";

export const meta: MetaFunction = () => [
  {
    name: "description",
    content: "UI Engineer with a passion for design and open source.",
  },
  {
    property: "og:url",
    content: "https://aryandeora.com",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:title",
    content: "Aryan Deora",
  },
  {
    property: "og:description",
    content: "UI Engineer with a passion for design and open source.",
  },
  {
    property: "og:image",
    content: "/og-home.jpg",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    property: "twitter:domain",
    content: "aryandeora.com",
  },
  {
    property: "twitter:url",
    content: "https://aryandeora.com",
  },
  {
    name: "twitter:title",
    content: "Aryan Deora",
  },
  {
    name: "twitter:description",
    content: "UI Engineer with a passion for design and open source.",
  },
  {
    name: "twitter:image",
    content: "/og-home.jpg",
  },
];

export default function Index() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col text-neutral-300">
      <BannerClientOnly />

      <div className="mt-24 px-6 pb-36">
        <div className="text-center text-lg uppercase text-neutral-400">
          Selected Work
        </div>

        <ProjectCards />
      </div>
    </div>
  );
}
