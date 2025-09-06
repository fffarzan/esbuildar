import * as esbuild from "esbuild";

// The build function runs the esbuild executable in a child process and returns a promise that resolves when the build is complete.
await esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "out.js",
});
