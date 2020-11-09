const isDev = process.env.NODE_ENV === "development"
const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        disable: isDev,
        dest: 'public'
    }
})