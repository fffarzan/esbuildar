import process from "node:process";

console.log("Hello, world!");

process.stdin.on("data", (chunk) => {
  console.log("You typed:", chunk.toString());
});
