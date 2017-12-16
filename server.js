import njs from 'njs';
import config from './config';


njs.init(config);
const app = njs.app;

export default app.listen(config.port);