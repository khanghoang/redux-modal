// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: [
    { dest: 'dist/index.cjs.js', format: 'cjs' },
    { dest: 'dist/index.es.js', format: 'es' },
  ],
  external: [ 'react', 'react-native' ],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      namedExports: {
        'node_modules/prop-types': [ 'PropTypes' ]
      }
    }),
    babel({
      babelrc: false,
      presets: ["react", ["es2015", { "modules": false }]],
      plugins: ["transform-object-rest-spread", "lodash"]
    }),
  ]
};
