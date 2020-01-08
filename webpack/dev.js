module.exports = function () {
    return {
        optimization: {
            minimize: false
        },
        devServer: {
            stats: "errors-only"
        },
    };
};