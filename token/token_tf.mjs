import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  source: ['token/token-tf.json'],
  platforms: {
    css: {
      buildPath: './token/',
      files: [{ destination: 'global_token.css', format: 'css/variables' }],
    },
  },
});

await sd.buildAllPlatforms();