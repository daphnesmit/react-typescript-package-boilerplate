import createDefaultRollupConfig from './config/defaultRollupConfig';
import pkg from './package.json';

const defaultRollupConfig = createDefaultRollupConfig(pkg);

export default {
  ...defaultRollupConfig,

  plugins: [
    ...defaultRollupConfig.plugins,
    // Your custom Rollup config here...
  ]
}