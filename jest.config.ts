module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom', // or 'node' depending on your environment
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'svelte'],
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.svelte'],
    globals: {
      'ts-jest': {
        isolatedModules: true,
        useESM: true, // Enable ESM support in ts-jest
      tsconfig: 'tsconfig.json',
      },
    },
  };