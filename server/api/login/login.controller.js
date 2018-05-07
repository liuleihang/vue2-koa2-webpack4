import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import UserModel from '../../models/User.model'
import { secret } from '../../config/index';

const User = mongoose.model('User');

class LoginController {
    async login(ctx){
        try{
            const { body } = ctx.request;
            const user = await User.findOne({username:body.username})
            if(!user){
                ctx.status = 401;
                ctx.body = {
                    message:'用户名不存在'
                }
                return;
            }
            if(await bcrypt.compare(body.password,user.password)){
                ctx.status = 200;
                ctx.body = {
                    message:'登录成功',
                    user:user.userInfo,
                    token:jsonwebtoken.sign({
                        data:user,
                        exp:Math.floor(Date.now() / 1000) + (60 * 60)
                    },secret)
                }
            }else {
                ctx.status = 401
                ctx.body = {
                message: '密码错误',
                }
            }
        } catch (error) {
            console.log('login-catch-',error)
            ctx.throw(500)
        }
    }
    
    async register(ctx){
        try{
            //console.log('register-request',ctx.request)
            const { body } = ctx.request;
            console.log('register-body',body)
            if(!body.username || !body.password){
                ctx.status = 400;
                ctx.body = {
                    message:"用户名或密码不能为空"
                }
                return;
            }
            body.password = await bcrypt.hash(body.password,5);
            let user = await User.find({username:body.username});
            if(!user.length){
                const newUser = User(body)
                user = await newUser.save();
                ctx.status = 200;
                ctx.body = {
                message: '注册成功',
                user,
                }
            }else{
                ctx.status = 406;
                ctx.body = {
                    message: '用户名已经存在',
                }
            }
        } catch (error) {
            console.log('register-catch-',error)
            ctx.throw(500)
        }
    }
}

export default new LoginController();