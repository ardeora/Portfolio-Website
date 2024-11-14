import { Link, Outlet } from "@remix-run/react";
import React from "react";
import { BannerClientOnly } from "~/components/Banner";

const Home = () => {
  return <Outlet />;
};

export default Home;
