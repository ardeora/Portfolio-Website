import type { MetaFunction } from "@remix-run/node";
import { BannerClientOnly } from "~/components/Banner";
import { ProjectCards } from "~/components/ProjectCards";
import { TestClientOnly } from "~/components/Test";

export const meta: MetaFunction = () => {
  return [
    { title: "Aryan Deora" },
    {
      name: "description",
      content: "UI Engineer with a passion for design and open source.",
    },
  ];
};

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
