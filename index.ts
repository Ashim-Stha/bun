// const z = 10;

// const read = (text: string) => {
//   return text;
// };

// const msg = read("Hello");
// console.log(msg);

import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync("Hey");
    return new Response(body);
  },
});

console.log(`${server.port}`);
