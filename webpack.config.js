const path = require('path');

module.exports = {
    entry: './src/listdetails.ts',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'js/listdetails.js',
        path: path.resolve(__dirname, 'public'),
    },
    watch: true
};