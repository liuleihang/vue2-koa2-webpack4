import Router from 'koa-router'
import Logincontroller from './login.controller'

const router = new Router();

router.post('/login',Logincontroller.login)
router.post('/register',Logincontroller.register)

export default router