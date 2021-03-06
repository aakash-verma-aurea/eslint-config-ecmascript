module.exports = {
  parserOptions: {
  		ecmaVersion: 2021,
  		sourceType: 'module',
  		ecmaFeatures: {
  			jsx: true
  		}
  	},
  	env: {
  		es2021: true,
  		node: true
  	},
    plugins: ["unicorn", "security"],
    rules: {
      "no-restricted-syntax": [
        "error",
        "WithStatement",
        {
          "selector": "BinaryExpression[operator='/'][right='0']",
          "message": "Division by zero is not allowed"
        },
        {
          "selector": "IfStatement[consequent.type='IfStatement']",
          "message": ""
        }
      ],
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-array-some": "error",
      "no-sparse-arrays": "error",
      "no-array-constructor": "error",
      "unicorn/prefer-spread": "error",
      "prefer-object-spread": "error",
      "no-magic-numbers": "error",
      "no-cond-assign": ["error", "always"],
      "no-return-assign": ["error", "always"],
      "no-unsafe-finally": "error",
      "no-duplicate-case": "error",
      "no-dupe-else-if": "error",
      "no-constant-condition": ["error", { "checkLoops": false }],
      "no-debugger": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "eqeqeq": ["error", "always"],
      "no-empty": "error",
      "semi": "error",
      "no-else-return": "error",
      "no-lonely-if": "error",
      "no-useless-catch": "error",
      // disable this rule if you're setting up prettier or a different rule config
      "max-len": ["error", { "code": 100, "tabWidth": 2 }],
      "no-ex-assign": "error",
      "no-throw-literal": "error",
      "no-nested-ternary": "error",
      "line-comment-position": ["error", { "position": "above" }],
      "lines-around-comment": ["error", {"beforeLineComment": true, "beforeBlockComment": true}],
      "brace-style": ["error",  "1tbs"],
      "indent": ["error", 2],
      "no-irregular-whitespace": "error",
      "array-bracket-spacing": ["error", "always", { "arraysInArrays": false, "objectsInArrays": false }],
      "block-spacing": "error",
      "comma-spacing": ["error", { "before": false, "after": true }],
      "arrow-spacing": "error",
      "no-trailing-spaces": "error",
      "no-mixed-spaces-and-tabs": "error",
      "object-curly-spacing": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "key-spacing": ["error", { "align": "colon" }],
      "computed-property-spacing": ["error", "never"],
      "no-whitespace-before-property": "error",
      "template-tag-spacing": "error",
      "switch-colon-spacing": ["error", {"after": true, "before": false}],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": ["error", { "int32Hint": false }],
      "generator-star-spacing": ["error", {"before": false, "after": true}],
      "semi-spacing": ["error", {"before": false, "after": true}],
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "block-like", "next": "*" },
      ],
      "curly": "error",
      "object-property-newline": "error",
      "no-multi-assign": "error",
      "no-extra-semi": "error",
      "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "enforceForNewInMemberExpressions": false, "enforceForArrowConditionals": false }],
      "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
      "id-length": ["error", { "min": 3 }],
      "camelcase": "error",
      "new-cap": "error",
      "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      "no-whitespace-before-property": "error",
      "prefer-arrow-callback": "error",
      "no-dupe-args": "error",
      "no-inner-declarations": ["error", "both"],
      // disable this for mock functions if needed
      "no-empty-function": "error",
      "no-param-reassign": ["error"],
      "no-promise-executor-return": "error",
      "consistent-return": "error",
      "no-setter-return": "error",
      "no-caller": "error",
      "default-param-last": ["error"],
      "getter-return": "error",
      "radix": "error",
      "use-isnan": "error",
      "wrap-iife": ["error", "any"],
      "prefer-const": "error",
      "prefer-template": "error",
      "prefer-spread": "error",
      "prefer-rest-params": "error",
      "prefer-destructuring": ["error", {
        "array": true,
        "object": true
      }, {
        "enforceForRenamedProperties": false
      }],
      "unicorn/consistent-destructuring": "error",
      "sort-imports": ["error", {
        "ignoreCase": true,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": true
      }],
      "no-unused-vars": ["error", { "vars": "local", "args": "all", "argsIgnorePattern": "^_", "ignoreRestSiblings": false, "caughtErrors": "all" }],
      "no-shadow": ["error", { "builtinGlobals": true, "hoist": "all", "allow": ["resolve", "reject", "done", "cb"] }],
      "no-undef": ["error", { "typeof": true }],
      "no-var": "error",
      "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
      "no-useless-constructor": "error",
      "no-self-assign": ["error", {"props": true}],
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "security/detect-non-literal-require": 1,
      "no-template-curly-in-string": "error",
      "quotes": ["error", "single", {"avoidEscape": true}],
      "require-await": "error"
    }
}
