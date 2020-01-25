 module.exports = {
    configureWebpack: {
        devServer: {
            proxy: 'http://localhost:8081',
            disableHostCheck: true,
            host: "0.0.0.0",
            port: 8081,
            public: process.env.C9_HOSTNAME + ":8081",
        }
    }
};
