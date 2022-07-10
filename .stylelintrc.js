module.exports = {
  extends: ["stylelint-config-recommended-scss",
            "stylelint-config-rational-order",
            "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    "selector-pseudo-element-no-unknown": [true, {
      "ignorePseudoElements": ["ng-deep"]
    }]
  }
};
