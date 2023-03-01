const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './'
});

/** @type {import('jest').Config} */
const customJestConfig = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	maxWorkers: '50%',
	testMatch: ['**/__tests__/**/*.test.ts?(x)'],
	testEnvironment: 'jest-environment-jsdom'
};

module.exports = createJestConfig(customJestConfig);
