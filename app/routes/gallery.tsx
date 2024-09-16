import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Aryan Deora | Gallery" },
    {
      name: "description",
      content: "UI Engineer with a passion for design and open source.",
    },
  ];
};

export default function Contact() {
  return (
    <div className="mt-8 flex-1">
      <div>Contact</div>
    </div>
  );
}
