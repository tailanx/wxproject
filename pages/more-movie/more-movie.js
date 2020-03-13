// pages/more-movie/more-movie.js
var getData = require("../index/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options == "" || options == null || options == {} || options == "{}" || undefined == options.title)
    wx.setNavigationBarTitle({
      title: undefined == options ?"更多":options.title
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff',
    })
    this.getSearchData();
    // wx.showNavigationBarLoading();
    // setTimeout(wx.hideNavigationBarLoading,2000)
    // setTimeout(wx.hideNavigationBarLoading(),2000)
  },


  getSearchData: function () {
    wx.showLoading({
      title: "正在加载...",
    })
    getData.getData("/project/list/1/json?cid=294", {}, "get", {}).then(res => {
      // console.log(res)
      this.setData({
        searchData: res.data.datas
      })
      wx.hideLoading()
    }), e => {

    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})