# proxx

https://github.com/GoogleChromeLabs/proxx

[Apache License](https://www.apache.org/licenses/LICENSE-2.0)

## Summary of use

The proxx repository is used in Kubercade as an Minesweeper-type game. The original repository's dependencies were installed using `npm install`, it was built with `npm run build`, and its built files from its `dist` and `.ts-tmp` directories are included in this directory.

Some modifications were made to the original source code in order to facilitate integration with the Kubercade high-score system:

* Leading slashes in filenames were removed in `index.html` and `src/main/offline/index.js` in order to load supporting scripts correctly.
