import * as esbuild from "esbuild";
import process from "node:process";

const config = {
  entryPoints: ["app.jsx"],
  // To bundle a file means to inline any imported dependencies into the file itself.
  // This process is recursive so dependencies of dependencies (and so on) will also be inlined.
  //  Note that bundling is different than file concatenation. Passing esbuild multiple input files with bundling enabled will create multiple separate bundles instead of joining the input files together.
  // bundling is a compile-time operation
  bundle: true,
  outdir: "dist",
  platform: "browser", // "browser" or "node" or "neutral"
};

// The build function runs the esbuild executable in a child process and returns a promise that resolves when the build is complete.
let result = await esbuild.build(config);
console.log("build-result:", result);

// To enable live reloading (automatically reloading the page when you edit and save a file) you'll need to enable watch and serve together on the same context.
// you can call dispose() on the context to wait for existing builds to finish, stop watch and/or serve mode, and free up resources.
let ctx = await esbuild.context(config);

// cancel and rebuild
process.stdin.on("data", async () => {
  try {
    await ctx.cancel();
    console.log("build:", await ctx.rebuild());
  } catch (err) {
    console.error(err);
  }
});

// watch: automatically start a build when you edit and save a file.
// serve: serve the latest build, but block until it's done.
await ctx.watch();
let { hosts, port } = await ctx.serve();

// Transform: This is a limited special-case of build that transforms a string of code representing an in-memory file in an isolated environment that's completely disconnected from any other files. Common uses include minifying code and transforming TypeScript into JavaScript.
let ts = "let x: number = 1";
let transformResult = await esbuild.transform(ts, {
  loader: "ts",
});
console.log("transformResult:", transformResult);
