const path = require('path')

const config = () => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js'
        },
        devServer: {
            static: path.join(__dirname, 'build'),
            compress: true,
            port: 3000,
            open: true
        },
        devtool: 'source-map',
        resolve: {
            extensions: [".js",".jsx","json"]
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader']
                },
                {
                    test: /\.(png|jp(e*)g|jpeg|gif|)$/i,
                    type: "asset/resource"
                }
            ]
        },
    }
}

module.exports = config