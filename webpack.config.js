var buildPath = require('path').join(__dirname, 'public');
module.exports = {
    entry: "./app/components/Main.js",
    output: {
        path: 'buildPath',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        progress: true,

        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }

        ]
    }
};
// var path = require("path");
// module.exports = {
//   entry: {
//     app: ["./app/App.js"]
//   },
//   output: {
//     path: path.resolve(__dirname, "public"),
//     publicPath: "/public/",
//     filename: "bundle.js"
//   },
//   devtool: "source-map",
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel',
//                 query: {
//                     // https://github.com/babel/babel-loader#options
//                     cacheDirectory: true,
//                     presets: ['react', 'es2015']
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//             }

//         ]
//     }
// };