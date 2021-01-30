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

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        })

        return config
    },
}
