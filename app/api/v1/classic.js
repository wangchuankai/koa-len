
const Router = require('koa-router')
const router = new Router();
const {HttpException} = require ("../../../core/http-exception");
const { ValidationInteger } = require('../../validators/validator')
router.get('/v1/:id/classic', async (ctx,next)=>{
  const path = ctx.params;
  const query = ctx.request.query;
  const header = ctx.request.header;
  const body = ctx.request.body;
  const V = await new ValidationInteger().validate(ctx)
  
  if(!!query){
    const error = new HttpException("为啥错了",10001,400);
    throw error;
  }

  ctx.body= {
    'key':'classic'
  } 
})

module.exports = router;