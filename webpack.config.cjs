const htmlWebpack =  require('html-webpack-plugin')
module.exports =
{
    entry: './src/index.js',
    output:{
        path: __dirname + '/bundle',
        filename: 'main.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader:'css-loader'}
                ]
            }
        ]
    },

    plugins:[
        new htmlWebpack({
            template: './src/index.html'
        })
    ]
}
