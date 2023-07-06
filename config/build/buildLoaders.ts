import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './config.type'

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  // если нет typeScript то нужен babel для jsx
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // замена styles.loader, для того чтобы генерировать css отдельно в проде
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => !!path.includes('module'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]',
          },
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  return [
    typeScriptLoader,
    cssLoader
  ]
}
