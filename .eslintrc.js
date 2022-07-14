module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        'airbnb-typescript/base',
        "plugin:import/recommended",
        'plugin:prettier/recommended'
      ],
      rules: {
        "prettier/prettier": [
          "error",
          {
            "endOfLine": "auto"
          },
        ],
        "import/no-unresolved": "off",
        "import/named": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/consistent-type-exports": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/method-signature-style" : "off",
        "@typescript-eslint/naming-convention" : "off",
        "@typescript-eslint/no-type-alias" : "off",
        "@typescript-eslint/no-unnecessary-qualifier" : "off",
        "@typescript-eslint/parameter-properties" : "off",
        "@typescript-eslint/prefer-enum-initializers" : "off",
        "@typescript-eslint/prefer-readonly-parameter-types" : "off",
        "@typescript-eslint/prefer-regexp-exec" : "off",
        "@typescript-eslint/promise-function-async" : "off",
        "@typescript-eslint/require-array-sort-compare" : "off",
        "@typescript-eslint/sort-type-union-intersection-members" : "off",
        "@typescript-eslint/strict-boolean-expressions" : "off",
        "@typescript-eslint/switch-exhaustiveness-check" : "off",
        "@typescript-eslint/type-annotation-spacing" : "off",
        "@typescript-eslint/typedef" : "off",
        "import/no-cycle": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/default": "off",
        "operator-linebreak": "off",
        "no-param-reassign": "off",
        "implicit-arrow-linebreak": "off",
        "max-len": "off",
        "indent": "off",
        "no-shadow": "off",
        "arrow-parens": "off",
        "no-confusing-arrow": "off",
        "no-use-before-define": "off",
        "object-curly-newline": "off",
        "function-paren-newline": "off",
        "import/prefer-default-export": "off",
        "max-classes-per-file": "off",
        "import/extensions": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/lines-between-class-members": "off",
        "no-console": [2, { allow: ["warn", "error"] }],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 140 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
