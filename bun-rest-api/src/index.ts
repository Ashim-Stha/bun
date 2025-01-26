import { Elysia } from "elysia";
import { plugin } from "./plugin";

//APPLICATION
const app = new Elysia()
  .get("/", () => "Hello Luffy")

  .state({
    id: 7,
    name: "Luffy",
  })
  .decorate("getDate", () => Date.now())
  .get("/post/:id", ({ params: { id } }) => {
    return { id: id, title: "learn bun" };
  })
  .post("/post", ({ body, set, store }) => {
    console.log(store);
    set.status = 201;
    return body;
  })
  .post("/context", ({ body }) => {
    return body;
  })
  .get("/track/*", () => {
    return "Track route";
  })
  .get("/tracks", ({ store, getDate }) => {
    // return new Response(
    //   JSON.stringify({
    //     tracks: ["Dancing Feat", "Sam I"],
    //   }),
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    console.log(store);
    console.log(getDate());
    console.log(store["plugin-version"]);

    return {
      tracks: ["Dancing Feat", "Sam I"],
    };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
