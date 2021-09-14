/**
 * Environment Variables 全局变量
 * eg:npx webpack --env goal=local --env production --progress
 */
const path = require("path");
module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log("Goal: ", env.goal); // 'local'
    console.log("Production: ", env.production); // true

    return {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
    };
};

/**
 * Build Performance 构建性能
 */

/**
 * Content Security Policies    内容安全政策
 */
__webpack_nonce__ = "c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=";

/**
 * Development - Vagrant 开发相关 Vagrant
 */

/**
 * Dependency Management 依赖管理
 * 
 * require.context(
  directory,
  (useSubdirectories = true),
  (regExp = /^\.\/.*$/),
  (mode = 'sync')
);
 */
// 如果想引入一个文件夹下面的所有文件，或者引入能匹配正则表达式的文件，你可以这样：
function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context("../components/", true, /\.js$/));
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../components/", true, /\.js$/));
// 在构建时缓存build-time cache将填充所有必需的模块。

/**
 * Installation  安装
 * 教你用不同的方法安装
 * 
 */
//  npm install --save-dev webpack
//  # or specific version
//  npm install --save-dev webpack@<version>
// npm install --save-dev webpack-cli
