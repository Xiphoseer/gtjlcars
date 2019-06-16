module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "node_modules/htmlcars/src/assets/sass/_variables.scss";
        @import "node_modules/htmlcars/src/assets/sass/_mixins.scss";`
      }
    }
  }
}
