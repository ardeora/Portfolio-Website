import { useId } from "react";
import { ClientOnly } from "remix-utils/client-only";

const Test = () => {
  const id = useId();
  const sketch = (p: p5) => {
    const parent = document.getElementById(id);
    if (!parent) return;
    const { width, height } = parent.getBoundingClientRect();
    const rows = 15;
    const cols = 20;

    p.setup = () => {
      const canvas = p.createCanvas(width, height);
      // Get parent dimensions
      p.background(0);
      p.stroke("#262626");
      p.strokeWeight(1);
      p.noFill();

      const w = width / cols;
      const h = height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          p.rect(i * w, j * h, w, h);
        }
      }
      p.noLoop();
    };
  };

  return (
    <div
      id={id}
      className="absolute left-0 right-0 h-full w-full"
      ref={(el) => {
        if (!el || typeof window === "undefined") return;
        new p5(sketch, el);
      }}
    ></div>
  );
};

export const TestClientOnly = () => {
  return (
    <ClientOnly fallback={<div className="h-52 w-full bg-neutral-950"></div>}>
      {() => <Test />}
    </ClientOnly>
  );
};
