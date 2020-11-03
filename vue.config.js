/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 11:33:05
 * @LastEditTime: 2020-10-15 18:29:49
 * @LastEditors: ranli
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variable.scss";`
      }
    }
  },
  publicPath:"./",
  productionSourceMap: false, // 生产环境的 source map,
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
