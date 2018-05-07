import koa from 'koa';
import errorHandle from './middlewares/errorHandle'
const app = new koa();


app.use(errorHandle);