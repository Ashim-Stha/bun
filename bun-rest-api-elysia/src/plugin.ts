import { Elysia } from "elysia";
//plugin is a way to decouple logic into smaller parts and defining reusable components across server

//Define plugin
export const plugin = new Elysia()
  .state("plugin-version", 1)
  .get("/from-plugin", () => "Hi")
  .get("/greet", () => "Hello Lufffffy");
