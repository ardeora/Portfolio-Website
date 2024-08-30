import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import NavBar from "~/components/NavBar";
import BgGrid from "~/components/BgGrid";
import {
  SmallSplineAnimatedContext,
  SplineAnimatedContext,
} from "./components/Spline";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [animated, setAnimated] = useState(false);
  const [animatedSmall, setAnimatedSmall] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="icon" href="/imgs/favicon.png" />
        <script src="https://cdn.jsdelivr.net/npm/p5@1.9.4/lib/p5.js"></script>

        <link
          rel="preload"
          href="/fonts/editorial/regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/daily-shine/regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/lwj/regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="w-full overflow-x-hidden bg-neutral-950">
        <BgGrid />
        <NavBar />
        <SmallSplineAnimatedContext.Provider
          value={{
            animated: animatedSmall,
            setAnimated: setAnimatedSmall,
          }}
        >
          <SplineAnimatedContext.Provider
            value={{
              animated,
              setAnimated,
            }}
          >
            {children}
          </SplineAnimatedContext.Provider>
        </SmallSplineAnimatedContext.Provider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
