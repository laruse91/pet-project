import webpack from 'webpack';
import { BuildOptions } from './config.type';

export const buildResolvers = ({ paths }: BuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {},
});
