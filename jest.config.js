module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/common/**/?(*.)+(spec).ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        'src/common/(.*)': '<rootDir>/src/common/$1',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/common/**/*.{ts,tsx}',
        '!<rootDir>/src/**/*.spec.{ts,tsx}',
        '!<rootDir>/src/**/*.d.{ts,tsx}',
        '!<rootDir>/src/__tests__/*',
    ],
    coverageDirectory: '<rootDir>/coverage',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    verbose: true,
}
