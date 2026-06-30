/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  // css path file which imported tailewind
  tailwindStylesheet: "./src/index.css",
};
