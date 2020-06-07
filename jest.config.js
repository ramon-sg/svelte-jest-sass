module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.(js|mjs)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte", "mjs"],
  testPathIgnorePatterns: ["node_modules", "cypress", "__sapper__"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: [
    ignoreModules([
      'svelte-spa-router',
      'regexparam'
    ])
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["./test/setup.js"],

  moduleNameMapper: {
    // FIX TypeError: regexparam is not a function
    // https://github.com/ItalyPaleAle/svelte-spa-router/issues/81
    "^regexparam$": "<rootDir>/node_modules/regexparam/dist/regexparam.mjs"
  }
};

function ignoreModules(modules) {
  return `node_modules/(?!(${ modules.join('|') })/)`
}