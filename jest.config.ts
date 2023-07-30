/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],

  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
    // 'src',
  ],

  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  modulePaths: ['<rootDir>src'],
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],

  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/svg.tsx',
  },
  // rootDir: '../../',
}

export default config
