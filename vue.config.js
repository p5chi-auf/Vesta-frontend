module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://vesta.local/api",
        changeOrigin: true
      }
    }
  }
};
