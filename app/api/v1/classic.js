
const Router = require('koa-router')
const router = new Router();

router.get('/v1/:id/classic', async (ctx,next)=>{
  const path = ctx.params;
  const query = ctx.request.query;
  const header = ctx.request.header;
  const body = ctx.request.body;
  if(!!query){
    const error = new Error("索索素偶搜搜");
    error.errorCode=10001;
    error.status=400;
    error.requestUrl=`${ctx.method} ${ctx.path}`;
    throw error;
  }

  ctx.body= {
    'key':'classic'
  } 
})

module.exports = router;