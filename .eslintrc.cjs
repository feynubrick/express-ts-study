module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
    es2021: true,
    browser: true,
    commonjs: true,
  },
  rules: {
    "no-undef": "warn",
    "no-console": "warn", // console 전역변수의 사용에 경고
    "valid-typeof": "error", // typeof 비교에 올바른 문자열 사용 못하면 에러
    eqeqeq: "error", // 비교 연산에 ==, !=을 사용하면 에러
    "no-unused-vars": "warn", // 사용되지 않은 변수가 있으면 에러
    "no-shadow": "error", // 하위 스코프에서 상위 스코프의 변수명 쓰면 에러
    "no-var": "error", // var 사용하면 에러
  },
};
