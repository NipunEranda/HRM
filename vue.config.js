// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// module.exports = {
//   publicPath: '',
// }

// module.exports = {
//   configureWebpack: {
//     devServer: {
//       historyApiFallback: true
//     }
//   }
// };

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
