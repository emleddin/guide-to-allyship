const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ['src/**/*.{scss,sass}', '!node_modules/**'],
  });

  eleventyConfig.addPassthroughCopy('favicon.ico');

  return {
    templateFormats: [
      "html"
    ],
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
