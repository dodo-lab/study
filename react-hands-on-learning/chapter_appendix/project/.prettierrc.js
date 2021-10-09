module.exports = {
  printWidth: 80,
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  overrides: [
    {
      files: "*.test.js",
      options: {
        semi: true
      }
    },
    {
      files: ["*.html", "legacy/**/*.js"],
      options: {
        singleQuote: false,
        tabWidth: 2
      }
    }
  ]
}