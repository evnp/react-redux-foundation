const poststylus = require(`poststylus`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const gitCommitHash = require(`git-rev-sync`);
const WebpackBuildNotifierPlugin = require(`webpack-build-notifier`);

function generateBuildFileName(extension, minified=False) {
  const hash = gitCommitHash.short(); // use "short" 7 character hash
  return [
    `build`,
    hash,
    ...(minified ? `min` : []), // only include .min if we`re minifying
    extension,
  ].join(`.`);
}

const stylusLoader = {
  loader: `stylus-loader`,
  options: {
    use: poststylus([
      `autoprefixer`, // auto-prefix vendor styles
    ]),
  },
};

module.exports = (env={}, argv) => {
  const minified = !!argv[`optimize-minimize`];
  return {
    devtool: `eval-cheap-module-source-map`,
    entry: [
      `babel-polyfill`,
      `./src/js/index.js`,
    ],
    output: {
      filename: generateBuildFileName(`js`, minified),
      path: __dirname + `/build`,
    },
    module: {
      rules: [
        { // JavaScript Loader - bundle .js import hierarchy (starting at index.js) into a single .js file
          test: /\.js$/,
          exclude: /node_modules/,
          use: [`babel-loader`],
        },
        { // Style Loader - bundle .styl imports in .js files into a single .css file
          test: /\.styl$/,
          include: __dirname + `/src/style`,
          use: argv.mode === `production` ? // only use the ExtractTextPlugin in production
            ExtractTextPlugin.extract({
              fallback: `style-loader`,
              use: [
                `css-loader`,
                stylusLoader,
              ],
            })
            :
            [
              `style-loader`,
              `css-loader`,
              stylusLoader,
            ],
        },
        { // Image Loader - resolve "url(...)" statements in .css files to images
          test: /\.(png|jpg|svg)$/,
          include: __dirname + `/src/images`,
          use: {
            loader: `url-loader`,
            options: {
              limit: 8192, // 8kb
            },
          },
        },
        { // JSON Loader - resolve .json imports in .js files to JavaScript objects
          test: /\.json$/,
          include: __dirname + `/src/json`,
          use: [`json-loader`],
        },
      ],
    },
    plugins: [
      // Instead of embedding css into the file where it is imported,
      // extract all css into a single output file.
      new ExtractTextPlugin(generateBuildFileName(`css`, minified)),
      // Generate an index.html file containing references to the newly created
      //  js build file - build/build.COMMIT_HASH.min.js
      // css build file - build/build.COMMIT_HASH.min.css
      new HtmlWebpackPlugin({
        template: `./src/index.html`,
        inject: `body`, // inject js file reference into body element
      }),
    ].concat(env.notify ? new WebpackBuildNotifierPlugin({
      title: __dirname,
      sound: false,
    }) : []),
  };
};
