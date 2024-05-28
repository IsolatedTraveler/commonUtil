import type { Config } from 'jest';
const config: Config = {
  transform: {},
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  // collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest/presets/default',
  coveragePathIgnorePatterns: [
    'views_V2024/g-lobal/util/var/const',
    'views_V2024/g-lobal/xhr/fun/setXhrKeyVal',
    '/type/',
    '/node_modules/'
  ]
};
export default config;
