// import {terser} from "rollup-plugin-terser"; // esm 混淆压缩
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/jump-text.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/jump-text.cjs.js',
      format: 'cjs',
    }
  ],
  plugins: [resolve(), commonjs()],
  external: [ 'charming']
}
