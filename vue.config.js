const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Переписываем путь для прокси
        secure: false, // Отключаем проверку SSL (если требуется)
      },
    },
  },

  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')); // Устанавливаем алиас на папку src
  },

  configureWebpack: {
    devtool: 'source-map', // Добавляем поддержку source maps для удобства разработки
  }
});
