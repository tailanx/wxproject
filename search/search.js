// search/search.js
const getData = require("../pages/index/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData: [],
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      winwidth: wx.getSystemInfoSync().windowWidth
    })
    this.getHeight()
  },

  getSearchData: function() {
    getData.getData("/project/list/1/json?cid=294", {}, "get", {}).then(res => {
      // console.log(res)
      this.setData({
        searchData: res.data.datas
      })
    }), e=>{

    }
  },

  cancle: function(){
    wx.navigateBack({
      url:'/pages/index/index'
    })
  },

  searchResult: function () {
    this.getSearchData();
  },

  getHeight: function() {
    var that = this;
    const query = wx.createSelectorQuery()
    query.select('.search_box').boundingClientRect(function(rect) {
      console.log(rect.height)
      that.setData({
        scrollHeight: wx.getSystemInfoSync().windowHeight - rect.height
      })

    }).exec()
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})