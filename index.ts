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
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const body = figlet.textSync("Hey");
      return new Response(body);
    }

    if (url.pathname === "/about") {
      return new Response("About me");
    }

    if (url.pathname === "/feed") {
      throw new Error("Could not fetch feed");
    }

    return new Response("404");
  },

  error(error) {
    return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`${server.port}`);
