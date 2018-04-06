const http = require('http')
const connect = require('connect')
const serveStatic = require('serve-static')

//file for serving static files
const app = connect().use(serveStatic('public/'))
http.createServer(app).listen(9000, () => {
    console.log('Listening...')
})