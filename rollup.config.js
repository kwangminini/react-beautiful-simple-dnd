// import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json" assert { type: 'json' }
import json from '@rollup/plugin-json';
const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const getBabelOptions = ({ useESModules }) => ({
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
    plugins: [['@babel/transform-runtime', { useESModules }]],
  });
const config = [
    //cjs
	{
		external: [ /node_modules/ ],
		input: './src/index.ts',
		output: [
			{
                file: pkg.main,
				format: 'cjs'
			}
		],
		plugins: [
            json(),
            nodeResolve({ extensions }),
            typescript({ tsconfig: './tsconfig.json' }),
			babel(getBabelOptions({ useESModules: false })),

			// commonjs({ include: '/node_modules/' }),
			peerDepsExternal(),
		]
	},
    //esm
    {
		external: [ /node_modules/ ],
		input: './src/index.ts',
		output: [
			{
				file: pkg.module,
				format: 'es',
			}
		],
		plugins: [
            json(),
            nodeResolve({ extensions }),
            typescript({ tsconfig: './tsconfig.json' }),
			babel(getBabelOptions({ useESModules: true })),
			// commonjs({ include: '/node_modules/' }),
			peerDepsExternal(),
		]
	}
];

export default config;