class HttpException extends Error {
  constructor(msg="服务器异常",errorCode=1000,code=500){
    super();
    this.errorCode=errorCode;
    this.msg=msg;
    this.code=code;
  }
}


class ParameterException extends HttpException {
  constructor(msg="参数错误",errorCode=1001,code=400){
    super();
    this.errorCode=errorCode;
    this.msg=msg;
    this.code=code;
  }
}

module.exports = {HttpException ,ParameterException}