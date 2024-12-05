import { createCookie, redirect } from "@remix-run/node";

let secret = process.env.COOKIE_SECRET || "default";
if (secret === "default") {
  console.warn(
    "Using default COOKIE_SECRET. This is insecure and should be changed.",
  );
  secret = "default-secret";
}

export let authCookie = createCookie("auth", {
  httpOnly: true,
  sameSite: "lax",
  secrets: [secret],
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 7, // 1 week
});

export const requireAuthCookie = async (request: Request) => {
  let userId = await authCookie.parse(request.headers.get("Cookie"));
  if (!userId) {
    throw redirect("/login", {
      headers: {
        "Set-Cookie": await authCookie.serialize("", {
          maxAge: 0,
        }),
      },
    });
  }

  return userId;
};
