import { http, HttpResponse } from "msw";

export const Handler = () => {
  return http.get("/api/user", () => {
    return HttpResponse.json({ message: "Hello World" });
  });
};

export const RequestHandler = () => {
  return http.get("/api/user", async ({ request }) => {
    const user = await request.json();
    return new Response(`Hello World! ${user}`);
  });
};
