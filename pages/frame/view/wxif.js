// pages/frame/view/wxif.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'mybool': true,
    'mybool2': false,
    'mybool3': null,
    'mybool4': "",
    'mybool5': undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  switchbool: function() {
    this.data.mybool = !this.data.mybool;
    this.setData({
      'mybool': this.data.mybool,
    })
    console.info(this.data.mybool);
  },
})
