module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                    }
                },
            ]
        },
    };
};