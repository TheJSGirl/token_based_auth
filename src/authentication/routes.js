import Router from 'koa-router';
import views from './views';

const router = new Router();

router.post('', '/signup', views.signUp);
router.post('', '/signin', views.signIn);
router.get('', '/feeds', views.feeds);

export default router;

