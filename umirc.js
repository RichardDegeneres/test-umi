import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // FIXME: δΈηζ
  theme: {
    '@primary-color': '#ff0',
  },
});
