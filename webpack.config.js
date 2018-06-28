const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
    mode   : 'development',
    entry  : [
        './components.js',
        './components.scss'
    ],
    output : {
        filename : 'bundle.js',
        path     : path.resolve( __dirname, 'templates' )
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [
                    {
                        // Adds CSS to the DOM by injecting a <style> tag
                        loader : 'style-loader'
                    },
                    {
                        // Interprets @import and url() like import/require() and will resolve them
                        loader : 'css-loader'
                    },
                    {
                        // Loader for webpac to process CSS with PostCSS
                        loader : 'postcss-loader',
                        options : {
                            plugins: function() {
                                return [
                                    require( 'autoprefixer' )
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader : 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            $               : 'jquery',
            jQuery          : 'jquery',
            'window.jQuery' : 'jquery',
            Popper          : ['popper.js', 'default' ],
            Tether          : 'tether'
        })
    ],
    node : {
        net : 'empty',
        tls : 'empty',
        fs  : 'empty'
    }
};

