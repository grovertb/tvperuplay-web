module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions": true,
      "blockBindings": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "experimentalObjectRestSpread": true,
      "restParams": true,
      "spread": true,
      "templateStrings": true,
      "modules": true,
      "classes": true
    }
  },
  "plugins": [
    "sort-keys-fix"
  ],
  "rules": {
    "sort-keys-fix/sort-keys-fix": "error"
  }
}