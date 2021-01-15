module.exports = {
    // 控制除html外的js, css, 图片等路径，会以绝对路径在html中存在，会以绝对路径在预加载包中存在，预加载和线上资源依赖此项
  staticPath: 'https://ai.yayaketang.com/static/yaya-site/',
  // 控制html的domain，会以绝对路径在预加载包中存在，预加载依赖此项
  domain: 'https://ai.yayaketang.com',
}