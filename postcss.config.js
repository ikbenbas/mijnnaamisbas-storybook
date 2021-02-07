module.exports = {
    plugins: {
        // PostCSS Preset Env includes autoprefixer and browsers option will be passed to it automatically.
        'postcss-preset-env': {
            stage: 0,
            browsers: 'last 2 versions',
        },
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-pxtorem': {},
    },
};
