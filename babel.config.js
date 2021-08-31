module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            constants: "./src/constants",
            api: "./src/api",
            fonts: "./src/fonts",
            navigation: "./src/navigation",
            helpers: "./src/helpers",
            dbModels: "./src/db-models",
          },
        },
      ],
    ],
  };
};
