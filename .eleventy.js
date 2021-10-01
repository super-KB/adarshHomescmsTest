module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/style.css');
  eleventyConfig.addPassthroughCopy('./src/sass/vendors/glider.min.css');
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/check.js');
  eleventyConfig.addPassthroughCopy('./src/css/icon-font.css');
  eleventyConfig.addPassthroughCopy('./src/css/fonts');
  eleventyConfig.addPassthroughCopy('./src/glider.js');
  eleventyConfig.addPassthroughCopy('./src/glider.min.js');

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
