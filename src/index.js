const express = require('express')
const app = express()
const port = 3333
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
}).get('/urlParams', (req, res) => {
    res.send({
        desc: '服务端收到的 query',
        res: req.query
    })
}).post('/reqMerge', (req, res) => {
    res.send({
        desc: '服务端收到的 body',
        res: req.body
    })
}).get('/reqCookies', (req, res) => {
    res.send({
        desc: '服务端收到的 cookies',
        res: req.cookies
    })
}).get('/statusCode', (req, res) => {
    res.send('服务端返回的状态码是200')
}).get('/resReplace', (req, res) => {
    res.send({
        desc: '服务端返回的是 { res: { test: 123 } }',
        res: {test: 123}
    })
}).get('/resMerge', (req, res) => {
    res.send({
        desc: '服务端返回的是 { res: { test: 123 } }',
        res: {test: 123}
    })
})

app.listen(port, () => {
    console.log(`Example app listening at 
        http://localhost:${port}
        http://test.whistle-example.com
        http://test-333-box.whistle-example.com`)
})
