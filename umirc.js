import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // FIXME: 不生效
  theme: {
    '@primary-color': '#ff0',
  },
});
