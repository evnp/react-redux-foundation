React + Redux Foundation
========================
A starting point for React+Redux apps

Features:
- [Babel](http://babeljs.io/) JS transpiling for es6 syntax, plus a few extras
  - [object rest spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
  - [class properties](https://babeljs.io/docs/plugins/transform-class-properties/)
    - allows auto-binding `this` in React class methods while still using es6 class syntax, see http://www.ian-thomas.net/autobinding-react-and-es6-classes/
  - [trailing function commas](https://babeljs.io/docs/plugins/syntax-trailing-function-commas/)
- [Stylus](http://stylus-lang.com/) CSS transpiling
- [CSS Loader](https://github.com/webpack/css-loader) used to resolve `url(...)` and `@import` statements in CSS to appropriate Webpack `require(...)` statements
- [Style Loader](https://github.com/webpack/style-loader) used to load CSS files from JavaScript via `import '<file>.css';`
- [Image Loader](https://github.com/tcoopman/image-webpack-loader) used for handling images references in CSS files
  - images under 25k are embedded directly into generated CSS files
- [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) used to bundle all CSS chunks into a single file (only in production builds)
- [React Hot Loader](https://gaearon.github.io/react-hot-loader/) used to auto-refresh React component code running in the browser (JS and CSS)
- [Html Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) used to generate index.html with hashed build file references for cachebusting
  - current git HEAD sha is used as hash for easily identifying the state of code in a build
