module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules", "cypress", "__sapper__"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["./test/setup.js"],
};