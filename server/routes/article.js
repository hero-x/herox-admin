import Router from 'koa-router';
const router = new Router();
import article from '../../utils/article'
const routers = router
  .post('/addArticle',async ctx=>{
    let doc = await article.addArticle(ctx)
    ctx.response.body = {
      data: doc,
      status: 200
    };
  })
  .get('/getAllArticle',async ctx=>{
    let doc = await article.getAllArticle(ctx)
    ctx.response.body = {
      data: doc,
      status: 200
    };
  })
  .post('/deleArticleById',async ctx=>{
    let doc = await article.deleArticleById(ctx)
    ctx.response.body = {
      data: doc,
      status: 200
    };
  })
export default routers