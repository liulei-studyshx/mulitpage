
const v1Config = require('./config/index.js')


const pages= {
    index: {
        entry: 'src/pages/client/index.js',
        template: 'public/index.html',
      },
      console: {
        entry: 'src/pages/console/index.js',
        template: 'public/index.html',
      },
}
module.exports = {
    pages,
    publicPath:process.env.NODE_ENV === 'production'
    ? v1Config.staticPath
    : '/static/hy/yaya-main/',
    devServe:{
      open:true,
      port:8080,
      hot:true
    },
    chainWebpack:{
        // webpack 抛出的配置
    }
}
