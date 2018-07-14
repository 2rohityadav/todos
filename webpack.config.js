const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js" // filename value is the name of the minified HTML that will be generated in the dist folder.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader", // load the style into the DOM
          "css-loader", // take the css & convert to js
          "sass-loader" // load the sass file & also have node-sass which converts scss -> css file
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html" // Used template key for looking HTML file.
    })
  ],
  devtool: "cheap-module-eval-source-map",
  // using this devtool get the exeact location of error occured,
  devServer: {
    historyApiFallback: true
    // historyApiFallback return index.html and index.html look into bunder.js file or any file u made it to bundle the files then find the relative path and relative component and render it.
  }
};
