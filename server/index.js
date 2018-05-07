import Koa from 'koa';
const app = new Koa();
import bodyParser from 'koa-bodyparser'
import jwt from 'koa-jwt'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from 'koa-cors'
import  mongoose from 'mongoose'

import errorHandle from './middlewares/errorHandle';
import { port, connexionString, secret } from './config/index'
import routing from './routes'

mongoose.connect(connexionString)
// mongoose promise 风格 [mongoose.Promise = require('bluebird')]
mongoose.Promise = global.Promise;

const publicKey = 'shared-secret';
//const publicKey = fs.readFileSync('/path/to/public.pub');
const publicApi = [/\/register/,/\/login/];
const jwtFilter = jwt({secret:publicKey}).unless({path:publicApi});



app
    .use(errorHandle)
    .use(jwtFilter)
    .use(logger())
    .use(bodyParser())
    .use(helmet())
    .use(cors())


routing(app)

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

app.listen(3000)

export default app