module.exports = {
    //axios域代理，解决axios跨域问题
    devServer: {
        proxy: {
            '/weather': {
                target: 'http://v.juhe.cn',
                changeOrigin: true,
                ws: true,
            }
        }
    },
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    }
}