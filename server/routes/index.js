import Router from 'koa-router';
import article from './article';
import user from './user';
const router = new Router();
router.use('/article', article.routes(), article.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
export default router;