const path = require('path');
const tsConfig = require('./tsconfig.json');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
    wpyExt: '.vue',
    eslint: false,
    cliLogs: !prod,
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            'mixins': path.join(__dirname, 'src/mixins'),
            'pages': path.join(__dirname, 'src/pages'),
            'components': path.join(__dirname, 'src/components'),
        },
        aliasFields: ['wepy', 'weapp'],
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: prod
        },
        sass: {
          outputStyle: 'compressed'
        },
        typescript: tsConfig,
        jade: {
            pretty: true,
        },
        babel: {
            sourceMap: true,
            presets: [
                'env'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions',
            ]
        }
    },
    plugins: {},
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
}

if (prod) {

    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
