import * as React from "react";
import * as Server from "react-dom/server";

export function Greet() {
  return <h1>Hello, world!</h1>;
}

console.log(Server.renderToString(<Greet />));

// ./node_modules/.bin/esbuild app.jsx --bundle --outfile=out.js
// ./node_modules/.bin/esbuild app.js --loader:.js=jsx --bundle --outfile=out.js

// node out.js
