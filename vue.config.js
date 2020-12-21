/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 11:33:05
 * @LastEditTime: 2020-12-21 17:54:53
 * @LastEditors: ranli
 */
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variable.scss";`
      },
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "@/styles/vantVariable.less";`,
          },
        },
      },
    }
  },
  publicPath: "./",
  assetsDir:"static",
  parallel: false,
  productionSourceMap: false, // 生产环境的 source map,
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          happyPackMode: true,
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: name => `${name}/style/less`
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },

};
