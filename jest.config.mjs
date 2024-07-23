import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  resetModules: true,
  fakeTimers: {
    enableGlobally: true,
  },
  injectGlobals: true,

  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],

  testEnvironment: 'jest-environment-jsdom',

  transform: {},
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^uuid$': 'uuid',
  },

  testPathIgnorePatterns: ['__tests__/utils/*.*', '__mocks__', '__fixtures__'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
