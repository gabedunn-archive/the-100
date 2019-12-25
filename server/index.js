const Koa = require('koa')
const Router = require('koa-router')
const koaJson = require('koa-json')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static')
const { config } = require('dotenv')
const { resolve } = require('path')

const { cors, responseTime, home } = require('./funcs')

config({ path: resolve(process.cwd(), '.env') })

const { join } = require('path')

const app = new Koa()
const r = new Router()

app.use(koaJson())
// app.use(koaStatic(join(__dirname, '..', 'dist')))
app.use(koaStatic(join('/home', 'redxtech', 'media', 'tv', 'The 100')))
app.use(cors)
app.use(responseTime)
app.use(bodyParser())

r.get('/', home)

app.use(r.routes())

const port = process.env.PORT || 8000

app.listen(port)
console.log(`Listening on port ${port}...`)
