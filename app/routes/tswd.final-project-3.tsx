import { json, Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { BannerClientOnly } from "~/components/Banner";

import { ClientOnly } from "remix-utils/client-only";
import { requireAuthCookie } from "~/lib/utils/auth";
import { LoaderFunctionArgs } from "@remix-run/node";
import Page from "~/components/story";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const id = await requireAuthCookie(request);

  return json({ message: "Hello, world!" });
};

const Home = () => {
  return (
    <div className="relative -mt-14 flex flex-1 flex-col bg-neutral-900 pt-14 text-white">
      <PageClientOnly />
    </div>
  );
};

const PageClientOnly = () => {
  return <ClientOnly>{() => <Page />}</ClientOnly>;
};

export default Home;
