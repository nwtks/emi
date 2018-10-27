import buble from "rollup-plugin-buble";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/emi.js",
  output: {
    name: "emi",
    file: "dist/emi.js",
    format: "umd"
  },
  plugins: [buble(), uglify()]
};
