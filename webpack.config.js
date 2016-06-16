var webpack = require('webpack');
var path = require('path');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var commonConfig = {
    resolve: {
        extensions: ['', '.ts', '.js', '.json']
    },
    module: {
        loaders: [
            // TypeScript
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true)
    ]
};


var clientConfig = {
    target: 'web',
    entry: './app/main.ts',
    output: {
        path: path.join(__dirname, 'dist', 'app')
    },
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    }
};


var serverConfig = {
    target: 'node',
    entry: './app/server/server.ts',
    output: {
        path: path.join(__dirname, 'dist', 'server')
    },
    externals: checkNodeImport,
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
};





// Default config
var defaultConfig = {
    output: {
        publicPath: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module: {
        noParse: [
            path.join(__dirname, 'zone.js', 'dist'),
            path.join(__dirname, 'angular2', 'bundles')
        ]
    },
    context: __dirname,
    resolve: {
        root: path.join(__dirname, '/app')
    }
};


var webpackMerge = require('webpack-merge');
module.exports = [
    // Client
    webpackMerge({}, defaultConfig, commonConfig, clientConfig),

    // Server
    webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];




// Helpers
function checkNodeImport(context, request, cb) {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
        cb(null, 'commonjs ' + request);
        return;
    }
    cb();
}