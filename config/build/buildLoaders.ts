import webpack from 'webpack'
import { cssLoader, svgLoader } from './loaders'
import { BuildOptions } from './config.type'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  // если нет typeScript то нужен babel для jsx
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader(isDev),
  ]
}
