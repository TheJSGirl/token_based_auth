import njs from 'njs';
import config from './config';
import routes from './src/routes';
import response from './utils/response';

njs.init(config);
const app = njs.app;
app.use(routes.routes());
app.use(response);

export default app.listen(config.port);