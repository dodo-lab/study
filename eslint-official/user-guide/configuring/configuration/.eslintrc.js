module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // overridesで対象ファイルを限定.
    "overrides": [
        {
            "files": ["src/*.js"],
            "excludedFiles": "*.test.js",
            "rules": {
                "quotes": ["error", "single"]
            }
        }
    ],
    "rules": {
        // 未使用の変数を許可.
        "no-unused-vars": "off"
    }
}
