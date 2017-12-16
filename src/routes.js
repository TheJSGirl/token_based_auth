import Router from 'koa-router';
import UserRoutes from './authentication/routes';


const router = new Router();

router.use(...[
  '',
  UserRoutes.routes(),
]);

export default router;

