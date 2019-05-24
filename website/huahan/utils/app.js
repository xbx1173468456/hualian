/**
 * @desc API请求接口封装
 * @author
 * @date
 */
/**
 * POST请求API
 * @  url  接口地址 
 * @  params 请求参数
 * @  method 请求类型(方法)
 * @  surceObj 来源对象
 * @  successFun  接口调用成功返回的回调函数
 * @  failFun  接口调用失败的回调函数
 * @  completeFun  接口调用结束的回调函数(调用成功失败都会进行)
 */
//GET请求方法
function requestGetApi(url,params,sourceObj,successFun,failFun,completeFun){
  requestApi(url,params,'GET',sourceObj,successFun,failFun,completeFun)
}

//POST请求方法
function requestPostApi(url, params, sourceObj, successFun, failFun, completeFun) {
  requestApi(url, params, 'POST', sourceObj, successFun, failFun, completeFun)
}

//api请求的方法
function requestApi(url,params,method,sourceObj,successFun,failFun,completeFun){
  if(method=='POST'){
    var contentType='application/x-www-form=urlencoded'
  }else{
    var contentType='application/json'
  }
  wx.request({
    url:url,
    method:method,
    data:params,
    header:{'Content-Type':contentType},
    success:function(res){
      typeof successFun=='function' && successFun(res.data,sourceObj)
    },
    fail:function(res){
      typeof failFun == 'function' && failFun(res.data,sourceObj)
    },
    complete:function(res){
      typeof comleteFun=='function' && completeFun(res.data,sourceObj)
    }
  })
}
module.exports={
  requestPostApi,
  requestGetApi
}