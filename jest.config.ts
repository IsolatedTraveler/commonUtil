import type { Config } from 'jest';
const config: Config = {
  transform: {},
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest/presets/default'
};
export default config;
