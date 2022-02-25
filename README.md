# Wolfstepper

A small JS game I made with my nephew

```bash
 __          __   _  __     _
 \ \        / /  | |/ _|   | |
  \ \  /\  / /__ | | |_ ___| |_ ___ _ __  _ __   ___ _ __
   \ \/  \/ / _ \| |  _/ __| __/ _ \ '_ \| '_ \ / _ \ '__|
    \  /\  / (_) | | | \__ \ ||  __/ |_) | |_) |  __/ |
     \/  \/ \___/|_|_| |___/\__\___| .__/| .__/ \___|_|
                                   | |   | |
                                   |_|   |_|
```

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

Created using the [melonJS](https://github.com/melonjs/melonJS) biolerplate and, built with :

- [melonJS 2](https://github.com/melonjs/melonJS)
- [ECMAScript 6](http://es6-features.org) structure and semantic
- [Webpack](https://webpack.js.org/guides)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) plugin for local development
- [Hot Reloading](https://webpack.js.org/concepts/hot-module-replacement) dev server
- Basic Asset Build [management](https://webpack.js.org/plugins/copy-webpack-plugin/)
- Minification and Transpiling to ES5 using [Babel](https://babeljs.io/docs/setup/#installation)
- Favicon support using the [favicons Webpack Plugin](https://www.npmjs.com/package/favicons-webpack-plugin)
- a [debug plugin](#Debug-plugin) to display stats on number of objects, memory usage, draw time, frame rate, etc...

## Prerequisites

Ensure you have [Node.js](http://nodejs.org/) installed, then install all the build dependencies in the folder where you cloned the repository :

```bash
[sudo] npm install
```

## Usage

- `npm run dev` to start the dev server on watch mode at `localhost:9000`.
- `npm run build` to generate a minified, production-ready build, in the `public` folder

if everything goes well, on running the dev server for the first time you should see this :
![boilerplate-helloworld](https://user-images.githubusercontent.com/4033090/134762171-6e1fac3d-8b41-4665-890b-daa217ba61dc.png)

> Note: when generating the production build, Webpack will attempt to filter files under the data folder to only copy final assets and ignore project files (e.g. .ftpp project files from Free Texture Packer). If you find your file being wrongly ignore you can easily add the corresponding extension in the [webpack.config.js](webpack.config.js) file
