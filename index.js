const Koa = require('koa');
const InitManger = require("./core/init");
const parser = require ("koa-bodyparser")
const catchError = require("./middlewares/exception")
//实例化
const app = new Koa();
app.use(parser()); 
app.use(catchError)
InitManger.initCore(app);

app.listen(3000)    