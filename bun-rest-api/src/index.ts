import { Elysia } from "elysia";
import { plugin } from "./plugin";

//APPLICATION
const app = new Elysia()
  .get("/", () => "Hello Luffy")

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
