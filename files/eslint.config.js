import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/**"] },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },

  {
    files: ["backend/**/*.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  {
    files: ["frontend/**/*.js"],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
];