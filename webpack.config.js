const path = require("path");

module.exports = {
    entry: {
        listdetails: './src/listdetails.ts',
        Character_perso: "./src/addCharacter_perso.ts",
        Edit_perso: "./src/edition_perso.ts"
    },
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
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    watch: true
};