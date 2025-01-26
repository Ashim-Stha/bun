import { t } from "elysia";

export const signinDto = t.Object({
  id: t.Number(),
  name: t.String(),
});
