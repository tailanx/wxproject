//index.js
//获取应用实例
const app = getApp()

const getData = require("api.js")

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiper: [{
      id: 1,
      banner_url: "https://r1.ykimg.com/050C00005A20F2A3ADBAC306050E751F?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100"
    }, {
      id: 2,
      banner_url: "https://r1.ykimg.com/050C000059A64EECADBA1F04860DA8F6?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100"
    }, {
      id: 3,
      banner_url: "https://r1.ykimg.com/050C00005BD95CB5ADA7B284A804B008?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100"
    }],
    indicators: true,
    times: 1500,
    auto: true,
    circulars: true,
    scrollX:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
    this.getData()
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changs: function(e) {
    // console.log(e)

  },
  imgload: function(e) {
    // console.log(e.detail)

    var winWidth = wx.getSystemInfoSync().windowWidth

    var imgwidth = e.detail.width

    var imgHeight = e.detail.height

    this.setData({
      swipterHeight: winWidth * imgHeight / imgwidth + "px"
    })
  },

  getData: function() {
    getData.getData("/article/listproject/0/json", {}, "get", {}).then(res => {
      console.log(res)
      this.setData({
        movieList:res.data.datas
      })
    }),e =>{
      console.log(e)
    }
  },
})