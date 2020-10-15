/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 11:33:05
 * @LastEditTime: 2020-10-14 23:26:55
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
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
