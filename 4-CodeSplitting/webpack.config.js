const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "CodeSplitting",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};
/**
 * Entry dependencies
 */
// module.exports = {
//     mode: "development",
//     entry: {
//         index: {
//             import: "./src/index.js",
//             dependOn: "shared",
//         },
//         another: {
//             import: "./src/another-module.js",
//             dependOn: "shared",
//         },
//         shared: "lodash",
//     },
//     devtool: 'inline-source-map',
//     output: {
//         filename: "[name].bundle.js",
//         path: path.resolve(__dirname, "dist"),
//     },
//     optimization: {
//         runtimeChunk: "single",
//     },
// };
/**
 * SplitChunksPlugin
 */
// module.exports = {
//     mode: "development",
//     entry: {
//         index:'./src/index.js',
//         another:'./src/another-module.js',
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         title: 'CodeSplitting',
//       }),
//     ],
//     output: {
//         filename: "[name].bundle.js",
//         path: path.resolve(__dirname, "dist"),
//         clean: true,
//     },
//     optimization: {
//         splitChunks:{
//             chunks:'all'
//         }
//     },
// };
