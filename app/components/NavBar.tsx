import { NavLink, useMatches } from "@remix-run/react";
import { motion } from "framer-motion";

const NavBar = () => {
  const match = useMatches();
  const lastMatch = match[match.length - 1];
  const path = lastMatch.pathname;

  const borderColorMap = {
    "/": "border-nav-1-900",
    "/about": "border-nav-2-900",
    "/blog": "border-nav-3-900",
    "/gallery": "border-nav-4-900",
  };

  const profileBorderColorMap = {
    "/": "border-nav-1-800",
    "/about": "border-nav-2-800",
    "/blog": "border-nav-3-800",
    "/gallery": "border-nav-4-800",
  };

  type BorderColor = keyof typeof borderColorMap;

  return (
    <div className="flex justify-center px-6 pt-4 720:px-0">
      <div className="hidden 720:block">
        <div className="relative flex h-10 items-center gap-4">
          <div
            className={`absolute -left-12 top-0.5 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-neutral-800 transition-colors duration-500 ${
              profileBorderColorMap[path as BorderColor]
            } `}
          >
            <a aria-label="Home" className="pointer-events-auto" href="/">
              <img
                className="h-7 w-7 rounded-full"
                src="https://avatars.githubusercontent.com/u/45807386?v=4"
                alt="Avatar"
              />
            </a>
          </div>

          <nav
            className={`pointer-events-auto block rounded-full border transition-colors duration-500 ${
              borderColorMap[path as BorderColor]
            }`}
          >
            <ul className="flex rounded-full bg-neutral-900 px-3 text-sm font-medium text-neutral-300 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur">
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-1-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-1-500 ${activeClass}`;
                  }}
                  to="/"
                >
                  {(val) => (
                    <>
                      <span>Home</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-2-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-2-500 ${activeClass}`;
                  }}
                  to="/about"
                >
                  {(val) => (
                    <>
                      <span>About</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-nav-2-400/0 via-nav-2-400/40 to-nav-2-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-3-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-3-500 ${activeClass}`;
                  }}
                  to="/blog"
                >
                  {(val) => (
                    <>
                      <span>Blog</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-nav-3-400/0 via-nav-3-400/40 to-green-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-4-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-4-500 ${activeClass}`;
                  }}
                  to="/gallery"
                >
                  {(val) => (
                    <>
                      <span>Gallery</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-nav-4-400/0 via-nav-4-400/40 to-nav-4-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="block w-full 720:hidden">
        <div className="relative flex h-10 items-center justify-between">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 bg-neutral-800 transition-colors duration-500 ${
              profileBorderColorMap[path as BorderColor]
            } `}
          >
            <a aria-label="Home" className="pointer-events-auto" href="/">
              <img
                className="h-7 w-7 rounded-full"
                src="https://avatars.githubusercontent.com/u/45807386?v=4"
                alt="Avatar"
              />
            </a>
          </div>

          <nav
            className={`pointer-events-auto block rounded-full border transition-colors duration-500 ${
              borderColorMap[path as BorderColor]
            }`}
          >
            <ul className="flex rounded-full bg-neutral-900 px-3 text-sm font-medium text-neutral-300 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur">
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-1-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-1-500 ${activeClass}`;
                  }}
                  to="/"
                >
                  {(val) => (
                    <>
                      <span>Home</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello-2"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-2-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-2-500 ${activeClass}`;
                  }}
                  to="/about"
                >
                  {(val) => (
                    <>
                      <span>About</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello-2"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-nav-2-400/0 via-nav-2-400/40 to-nav-2-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-3-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-3-500 ${activeClass}`;
                  }}
                  to="/blog"
                >
                  {(val) => (
                    <>
                      <span>Blog</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello-2"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-nav-3-400/0 via-nav-3-400/40 to-green-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(val) => {
                    const activeClass = val.isActive ? "text-nav-4-500" : "";
                    return `relative block px-3 py-2 transition hover:text-nav-4-500 ${activeClass}`;
                  }}
                  to="/contact"
                >
                  {(val) => (
                    <>
                      <span>Contact</span>
                      {val.isActive && (
                        <motion.span
                          layoutId="hello-2"
                          className="absolute -bottom-px left-0 h-[2px] w-full bg-gradient-to-r from-nav-4-400/0 via-nav-4-400/40 to-nav-4-400/0"
                        ></motion.span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
