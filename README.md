https://esbuild.github.io/api/#live-reload --> should be read

Bundling
For browser
When bundling is enabled the default output format is set to iife, which wraps the generated JavaScript code in an immediately-invoked function expression to prevent variables from leaking into the global scope.
For Node
When bundling is enabled the default output format is set to cjs, which stands for CommonJS (the module format used by node). ES6-style exports using export statements will be converted into getters on the CommonJS exports object.
