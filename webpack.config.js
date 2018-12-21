module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    context: __dirname,
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
