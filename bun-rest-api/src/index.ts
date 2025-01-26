import { Elysia, t } from "elysia";
import { plugin } from "./plugin";
import { signinDto } from "./models";

//APPLICATION
const app = new Elysia()
  .get("/", () => "Hello Luffy")
  .use(plugin)
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
  });

app.group("/user", (app) =>
  app
    .post("/signin", ({ body }) => body, {
      body: signinDto,
      response: signinDto,
    })
    .post("/signup", () => "Sign up route")
    .post("/profile", () => "Profile route")
    .get("/:id", () => "User by id")
);

app.group("/v1", (app) =>
  app
    .get("/", () => "Version 1")
    .group("/products", (app) =>
      app
        .post("/", () => "Create Product")
        .get(
          "/:id",
          ({ params: { id } }) => {
            return id;
          },
          {
            params: t.Object({
              id: t.Numeric(),
            }),
          }
        )
        .put("/:id", () => "Update product by id")
        .delete("/:id", "Delete product by id")
    )
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
