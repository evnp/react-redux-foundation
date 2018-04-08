React + Redux Foundation
========================
A starting point for React+Redux apps

Features:
- [Babel](http://babeljs.io/) JavaScript transpiling for JSX and es6 syntax
- [Stylus](http://stylus-lang.com/) CSS transpiling
  - [PostCSS](https://github.com/postcss/postcss) and [Autoprefixer](https://github.com/postcss/autoprefixer) used to automatically add vendor prefixes to CSS rules
- [CSS Loader](https://github.com/webpack/css-loader) used to resolve `url(...)` and `@import` statements in CSS to appropriate Webpack `require(...)` statements
- [Style Loader](https://github.com/webpack/style-loader) used to load CSS files from JavaScript via `import '<file>.css';`
- [Image Loader](https://github.com/tcoopman/image-webpack-loader) used for handling images references in CSS files
  - images under 25k are embedded directly into generated CSS files
- [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) used to bundle all CSS chunks into a single file (only in production builds)
- [Html Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) used to generate index.html with hashed build file references for cachebusting
  - current git HEAD sha is used as hash for easily identifying the state of code in a build
