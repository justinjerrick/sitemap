module.exports = {
    build: {
        postcss: [
            require('postcss-cssnext')(),
            require('postcss-responsive-font')(),

        ]
    },

    router: {
        middleware: ['routechange']
    },
    head: {
      link:[
        {rel: 'shortcut icon',  href:'https://res.cloudinary.com/jerrick/image/upload/f_auto,q_auto/v1495549930/jerrick-favicon_rqyamw.png'}
      ],
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }]
    },
    css: [{
        src: 'assets/scss/main.scss',
        lang: 'scss'
    }],
  loading: false
}
