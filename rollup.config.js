import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/temi.js',
    output: {
      file: 'dist/temi.js',
      format: 'cjs'
    },
    plugins: [buble()]
  },
  {
    input: 'src/temi.js',
    output: {
      name: 'temi',
      file: 'dist/temi.min.js',
      format: 'umd'
    },
    plugins: [buble(), uglify()]
  }
];
