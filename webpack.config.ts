import path from 'path'
import {BuildEnv, BuildPath, BuildWebpackConfig} from './config/build'


export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 8080

  const isDev = mode === 'development'

  return BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
}
