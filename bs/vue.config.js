module.exports = {
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // 所以这里假设你有 `src/variables.scss` 这个文件
          data: `@import "@/scss/vars.scss";`
        }
      }
    }
  }