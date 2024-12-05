import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import { authCookie } from "~/lib/utils/auth";

export const meta: MetaFunction = () => {
  return [
    { title: "Aryan Deora | Gallery" },
    {
      name: "description",
      content: "UI Engineer with a passion for design and open source.",
    },
  ];
};

export async function action(args: ActionFunctionArgs) {
  const { request } = args;
  const formData = await request.formData();
  const password = String(formData.get("password")).toLowerCase();

  if (password === "cmu-tswd") {
    return redirect("/tswd/final-project-3", {
      headers: {
        "Set-Cookie": await authCookie.serialize("1"),
      },
    });
  }

  return json({ message: "invalid" });
}

export default function Contact() {
  const data = useActionData<typeof action>();

  return (
    <div className="relative -mt-14 flex flex-1 flex-col items-center justify-center gap-8 bg-neutral-900 text-white">
      <div className="min-w-96">
        <h1 className="text-center text-3xl font-semibold text-neutral-200">
          Telling Stories With Data
        </h1>
        <p className="pt-1 text-center font-light uppercase tracking-widest text-neutral-300">
          Final Project
        </p>
      </div>
      <Form method="post" className="flex min-w-96 flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="Password" className="block text-neutral-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="block w-full rounded border border-neutral-700 bg-neutral-800 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-nav-2-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="rounded bg-nav-2-500 p-2 font-semibold text-nav-2-950 transition-colors duration-200 ease-in hover:bg-nav-2-600 hover:text-nav-2-950 focus:outline-none focus:ring-2 focus:ring-nav-2-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            Submit
          </button>
          <p className="text-sm text-red-500">
            {data?.message === "invalid" ? (
              "Invalid Password"
            ) : (
              <span>&nbsp;</span>
            )}
          </p>
        </div>
      </Form>
    </div>
  );
}
