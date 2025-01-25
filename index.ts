// const z = 10;

// const read = (text: string) => {
//   return text;
// };

// const msg = read("Hello");
// console.log(msg);

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("hellooo<<");
  },
});

console.log(`${server.port}`);
