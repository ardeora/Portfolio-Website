import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Blog() {
  return (
    <div className="mt-8 flex-1">
      <div>Blog</div>
    </div>
  );
}
