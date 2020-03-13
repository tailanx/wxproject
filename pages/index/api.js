var host = "https://www.wanandroid.com"

function getData(parms, datas = {}, methods, headers ={}){
    return new Promise(function(resolve,reject){
      wx.request({
        url:host+parms,
        data:datas,
        method:methods,
        header:headers,
        success:function(e){
          if(e.statusCode =200){
            resolve(e.data)
          }else{
            reject("数据错误")
          }
        },
        fail:function(e){
          reject("请求失败")
        }
      })
    })

}
module.exports = {
  getData :getData
}