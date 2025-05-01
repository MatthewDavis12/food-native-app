module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@': './',                            // root of project
                        '@components': './src/components',
                        '@styles': './src/styles',
                        '@utils': './src/utils',
                        '@assets': './src/app/assets',
                        '@context': './src/context'
                    },
                },
            ],
        ],
    };
};