module.exports = { 

    //define an entry point 

    entry:'./form.js',

    //define output point 

    output : {
        // path: 'dist',
        filename : 'bundle.js'
    },

    mode : 'development',

    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env"],
                    },  
            },
            },
            {
                test : /\.scss$/,
                use : ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
        },


};