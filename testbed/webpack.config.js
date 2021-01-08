const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.js",
    },

    mode: "development",
    devtool: "source-map",

    devServer: {
        contentBase: [
            "./build",
            "./public",
        ],
        hotOnly: true,
    },

    watchOptions: {
        poll: true
    },    

    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ],
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader"
            },
        ],
    },

    plugins: [
        // https://hackernoon.com/react-with-typescript-and-webpack-654f93f34db6
        new webpack.HotModuleReplacementPlugin(),
    ],
};