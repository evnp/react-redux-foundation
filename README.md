React+Redux Foundation
===================
A starting point for React+Redux apps

Features:
- Babel JS transpiling for es6 syntax, plus a few extras
  - object spread
  - class properties
  - trailing function commas
- Stylus CSS transpiling (http://stylus-lang.com/)
- Image Loader used to embed images under 25k in generated CSS files (larger images are automatically referenced by file)
- ExtractTextPlugin used to bundle all CSS chunks into a single file (only in production builds)
- React Hot Loader used to auto-refresh React component code running in the browser (JS and CSS)
- HtmlWebpackPlugin used to generate index.html with hashed build file references for cachebusting
  - current git HEAD sha is used as hash for easily identifying the state of code in a build
