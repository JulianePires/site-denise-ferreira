const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  preset: 'ts-jest',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@resources/(.*)$': '<rootDir>/src/resources/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  verbose: true, // modo verboso ativado
  testEnvironment: 'jsdom', // falar o tipo de ambiente que vai rodar os testes
  testPathIgnorePatterns: ['/node_modules/'], // pastas a serem ignoradas
  collectCoverage: true, // se vai coletar as coberturas de linhas testadas
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  collectCoverageFrom: [
    // essa opção fala de onde e de quais arquivos ele vai
    'src/**/*.ts(x)?', // pegar pra fazer a cobertura do código
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
