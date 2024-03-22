// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/tests/*.test.ts", "**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
