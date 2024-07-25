// webpack.config.js
import path from 'path';

export default {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    mode: 'development'
};
