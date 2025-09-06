import * as esbuild from "esbuild";

// The build function runs the esbuild executable in a child process and returns a promise that resolves when the build is complete.
await esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  outdir: "dist",
});
