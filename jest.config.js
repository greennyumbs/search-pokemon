module.exports = {
  testMatch: ['**/__tests__/**/*.test.(js|ts|jsx|tsx)'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
