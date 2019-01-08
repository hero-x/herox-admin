import Router from 'koa-router';
const router = new Router();
import user from '../../utils/user'
const routers = router
  .get('/getUserInfo',async ctx=>{
    let doc = await user.getUserInfo(ctx)
    ctx.response.body = {
      data: doc,
      status: 200
    };
  })
  .post('/addUserInfo',async ctx=>{
    let doc = await user.addUserInfo(ctx)
    ctx.response.body = {
      data: doc,
      status: 200
    };
  })
  .post('/updateUserInfo',async ctx=>{
    let doc = await user.updateUserInfo(ctx)
    ctx.response.body = {
      data: doc,
      status: 200
    };
  })
export default routers