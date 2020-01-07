const {HttpException} = require("../core/http-exception")
const config = require ("../config/config")
const catchError = async (ctx,next)=>{
  try {
    await next()
  } catch (error) {
     if(error instanceof HttpException){
      ctx.body={
        msg:error.msg,
        error_code:error.errorCode,
        request:`${ctx.method} ${ctx.path}`
      }
      ctx.status=error.code;
     }else{
      ctx.body={
        msg:"服务器未知错误",
        error_code:999,
        request:`${ctx.method} ${ctx.path}`
      }
      ctx.status=500;
     }
    // if(config.env === "dev"){
    //   throw error;
    // }
  }
}

module.exports = catchError;