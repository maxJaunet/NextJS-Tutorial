import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const context = __dirname;
export const entry = './src/index.ts';
export const resolve = {
  extensions: [".ts", ".tsx", ".js"],
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: true
      }
    }
  ]
};
export const plugins = [new ForkTsCheckerWebpackPlugin({
  eslint: {
    files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
  }
})];
