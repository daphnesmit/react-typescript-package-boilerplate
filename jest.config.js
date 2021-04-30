module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRunner: "jest-circus/runner",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', 
    '!src/**/*.d.ts'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  resetMocks: true,
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
}