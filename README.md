# vue2-koa2-webpack4
参考

https://github.com/superman66/koa-jwt-sample



## 安装模块
- ``bcrypt`` - 用于加密密码
- ``koa-jwt`` - jwt 中间件
- ``jsonwebtoken`` - 用于生成token下发给浏览器，在 koa2 以后的版本不再提供 jsonwebtoken 的方法,所以需要另行安装。
- ``nodemon`` - node调试工具


需要在生产环境用到的
```
{
    "babel-polyfill": "^6.26.0",
    "bcrypt": "^2.0.1",
    "glob": "^7.1.2",
    "jsonwebtoken": "^8.2.1",
    "koa": "^2.5.1",
    "koa-bodyparser": "^4.2.0",
    "koa-cors": "0.0.16",
    "koa-helmet": "^4.0.0",
    "koa-jwt": "^3.3.1",
    "koa-logger": "^3.2.0",
    "koa-router": "^7.4.0",
    "koa-static": "^4.0.2",
    "mongoose": "^5.0.17"
 }
 
npm install <name> --save
```
不需要在生产环境用到的
```
{
    "babel-cli": "^6.26.0",
    "babel-eslint": "^8.2.3",
    "babel-plugin-add-module-exports": "^0.2.1",
    "babel-plugin-syntax-async-functions": "^6.13.0",
    "babel-plugin-transform-async-to-generator": "^6.24.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-register": "^6.26.0",
    "chai": "^4.1.2",
    "eslint": "^4.19.1",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-plugin-import": "^2.11.0",
    "nodemon": "^1.17.4",
    "should": "^13.2.1",
    "supertest": "^3.0.0"
}
npm install <name>  --D
```



有疑问的依赖插件
```
"eslint-plugin-jsx-a11y": "^6.0.2",
"eslint-plugin-react": "^7.4.0",
```



​    



## 待解决问题
 - hoek模块需要升级到4.2.1，目前是2.16.3
 - koa-logger中间件打印的日志缺少请求参数

## 知识点
#### 关于mongoose中使用 virtual 属性的问题
#### npm依赖包更新
- npm-check-updates

  https://blog.csdn.net/wkl305268748/article/details/76641323

  安装:``npm install -g npm-check-updates``

  检查:``npm-check-updates``
  更新:``npm-check-updates -a``
- npm-check
  https://www.jianshu.com/p/a33702a4b096

  安装:``npm install -g npm-check``

  检查npm包的状态:``npm-check -u -g``

  ​