const path = require('path')

module.exports = {
    stories: ['../src/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'

        // https://github.com/storybookjs/storybook/issues/6319#issuecomment-477852640
        // config.module.rules = config.module.rules.filter(
        //     rule => !rule.test || rule.test.toString() !== '/\\.css$/'
        // );

        // config.module.rules.push({
        //     test: /\.css$/,
        //     loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        //     include: path.resolve(__dirname, '../'),
        // });

        // config.module.rules.push({
        //     test: /\.postcss$/,
        //     loaders: ['style-loader', 'postcss-loader'],
        //     include: path.resolve(__dirname, '../'),
        // });

        // config.module.rules = config.module.rules.forEach(rule => {
        //         if (rule.test.toString() === '/\\.vue$/') {
        //             console.log(rule);
        //             rule['loaders'] = ['postcss-loader'];
        //         }
        // });

        // config.module.rules.push({
        //     test: /\.vue$/,
        //     loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        //     include: path.resolve(__dirname, '../'),
        // });

        return config
    },
}
