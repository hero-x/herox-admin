import Koa from 'koa'
import Router from 'koa-router'
import cors from 'koa-cors'
import config from '../config'
import route from './routes'
import bodyParser from 'koa-bodyparser'
async function start () {
  const app = new Koa()
  const host = process.env.NODE_ENV=='production'? '0.0.0.0': '127.0.0.1'
  const port = process.env.NODE_ENV=='production'? 3031 : 3030
  app.on('error', function(err,ctx){
    console.log('-------统一错误打印-------');
    console.log(err);
  }); 
  app.use(bodyParser())
  const router = new Router()
  app.use(cors())
  router.use('', route.routes())
  app
  .use(router.routes())
  .use(router.allowedMethods())
  app.listen(port, host)
  console.log('Server listening on ' + `http://${host}:${port}`)
}

start()