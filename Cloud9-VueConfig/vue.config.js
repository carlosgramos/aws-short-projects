 module.exports = {
    configureWebpack: {
        devServer: {
            proxy: 'http://localhost:8080',
            disableHostCheck: true,
            host: "0.0.0.0",
            port: 8080,
            public: process.env.C9_HOSTNAME + ":8080",
        }
    }
};