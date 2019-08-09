module.exports = {
  chainWebpack: config => {
    config.externals([
      /.*camljs.*/i,
      {
        'jquery': 'jquery',
      },
    ])
  },
}