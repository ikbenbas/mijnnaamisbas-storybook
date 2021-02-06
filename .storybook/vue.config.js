module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.postcss$/,
                    use: ['style-loader', 'postcss-loader'],
                },
            ],
        },
    },
};
