// const commonjs = require('@rollup/plugin-commonjs');
// const json = require('@rollup/plugin-json');
// const resolve = require('@rollup/plugin-node-resolve').default;
// const typescriptPlugin = require('@rollup/plugin-typescript');
// const url = require('@rollup/plugin-url');
// const externals = require('rollup-plugin-node-externals');
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescriptPlugin from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import externals from 'rollup-plugin-node-externals';

const dirname = (file) => {
  const [root, folder] = file.split('/');
  return `${root}/${folder}`;
};

function createDefaultRollupConfig(pkg) {
  return {
    input: pkg.source,
    output: [
      {
        dir: dirname(pkg.main),
        format: 'cjs',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
      {
        dir: dirname(pkg.module),
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      externals({
        deps: true,
        peerDeps: true,
      }),
      url(),
      resolve(),
      json(),
      typescriptPlugin({
        exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
      }),
      commonjs(),
    ],
  };
}

export default createDefaultRollupConfig;
