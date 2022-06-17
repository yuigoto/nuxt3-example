import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";

const VUE_SASS_PATH = resolve(process.cwd());

const VUE_SASS_AUTO_IMPORT = `@import "${VUE_SASS_PATH}/styles/variables";
@import "${VUE_SASS_PATH}/styles/functions";
@import "${VUE_SASS_PATH}/styles/mixins";`;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: VUE_SASS_AUTO_IMPORT,
          sassOptions: {
            precision: 8,
            outputStyle: "compressed",
            sourceComments: false,
            includePaths: ["./src/styles"],
            quietDeps: true,
          },
        },
      },
    },
  },
});
