/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-15 14:22:53
 * @LastEditTime: 2020-12-16 17:09:01
 * @LastEditors: ranli
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};