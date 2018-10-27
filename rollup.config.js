import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/emi.js',
    output: {
      file: 'dist/emi.js',
      format: 'cjs'
    },
    plugins: [buble()]
  },
  {
    input: 'src/emi.js',
    output: {
      name: 'emi',
      file: 'dist/emi-umd.js',
      format: 'umd'
    },
    plugins: [buble(), uglify()]
  }
]
