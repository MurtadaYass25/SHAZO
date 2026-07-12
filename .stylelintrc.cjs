module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "component",
          "utilities"
        ]
      }
    ]
  },
  ignoreFiles: ["**/node_modules/**", ".next/**"]
};
