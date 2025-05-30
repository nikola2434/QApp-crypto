import { buildWebpack } from './config/buildWebpack';
import { BuildOptions, BuildPaths } from './config/types';
import path from 'path';
import { Configuration } from 'webpack';

export default (env: BuildOptions) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src', 'main.tsx'),
    output: path.resolve(__dirname, 'build'),
    packageJSON: path.resolve(__dirname, 'package.json'),
  };

  const config: Configuration = buildWebpack({
    port: env.port ?? 8045,
    mode: env.mode ?? 'development',
    paths,
    alias: {
      '@public': path.resolve(__dirname, 'public'),
      '@UI': path.resolve(__dirname, 'src', 'Components', 'UI'),
    },
  });

  return config;
};
