import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    name: "description",
    content: "UI Engineer with a passion for design and open source.",
  },
  {
    property: "og:url",
    content: "https://aryandeora.com/blog",
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
    content: "https://aryandeora.com/blog",
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
  {
    title: "Aryan Deora | Blog",
  },
];

export default function Blog() {
  return (
    <div className="mt-8 flex-1">
      <div>Blog</div>
    </div>
  );
}
