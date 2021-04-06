const isDev = process.env.NODE_ENV === "development"
const withPWA = require('next-pwa')
 
module.exports = withPWA({
    future: {
        webpack5: true,
    },
    pwa: {
        disable: isDev,
        dest: 'public'
    }
})