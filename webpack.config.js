const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
        './src/script/BlackKey.ts',
        './src/script/globalScript.ts',
        './src/script/Interval.ts',
        './src/script/Key.ts',
        './src/script/KeyOctave.ts',
        './src/script/midiScript.ts',
        './src/script/ScaleToneSequence.ts',
        './src/script/WhiteKey.ts'
    ],
    target: 'electron-renderer',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript'
                            ]
                        }
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/script'),
    },
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^fsevents/,
        }),
    ]
};