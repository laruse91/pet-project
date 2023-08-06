import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import { RuleSetRule } from 'webpack'
import { BuildPath } from '../build'
import { cssLoader, svgLoader } from '../build/loaders'

const config: StorybookConfig = {
  features: {
    storyStoreV7: false,
  },
  stories: [
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@.storybook/addon-links',
    '@.storybook/addon-essentials',
    '@.storybook/addon-onboarding',
    '@.storybook/addon-interactions',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    const paths: BuildPath = {
      entry: '',
      html: '',
      build: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    }
    return {
      ...config,

      module: {
        ...config.module,
        rules: [
          ...config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
              return { ...rule, exclude: /\.svg$/i }
            }
            return rule
          }),

          cssLoader(true),
          svgLoader,
        ],
      },

      resolve: {
        modules: [
          ...config.resolve.modules,
          paths.src,
        ],
        extensions: [
          ...config.resolve.extensions,
          '.ts', 'tsx',
        ],
      },
    }
  },
}
export default config
