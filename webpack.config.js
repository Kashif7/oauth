const path = require('path');

module.exports = {
    entry: "./frontend/src/index.jsx",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
       contentBase: './build',
       historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}