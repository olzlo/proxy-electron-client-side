const path = require("path");

const resolve = path.resolve;

module.exports = {
  // 选项...
  // configureWebpack: config => {
  //   // config.context = config.context + '\\renderer'
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...

  //   } else {
  //     // 为开发环境修改配置...
  //     console.log(config.entry)
  //     console.log(config.context)
  //     console.log(config.resolve.alias)
  //   }
  // },
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/renderer/main.js")
      .end()
      .resolve.alias.set("@", resolve(__dirname, "./src/renderer"));
  },
  pluginOptions: {
    electronBuilder: {
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: "src/main/index.js"
    }
  }
};
