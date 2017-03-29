module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            // to not specify aliases for every file in the components folder;
            // to always look for modules in the components folder by default
            'node_modules',     // default; we can overwrite it below
            './app/components'  // specify folders for webpack
        ],
        /* modulesDirectories instead of alias
		alias: {
            Search: 'app/components/Search.jsx',
            Add: 'app/components/Add.jsx',
            List: 'app/components/List.jsx',
            Todo: 'app/components/Todo.jsx',
            TodoApp: 'app/components/TodoApp.jsx'
		}, */
        /*alias: {
            applicationStyles: 'app/styles/app.css'
        },*/
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
