// pages/component/form/button.js
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
  onShareAppMessage: function (event) {
    if (event.target.dataset["scene"] == "分享1") {
      return {
        "title": "点击了分享按钮1"
      }
    }
    if (event.target.dataset["scene"] == "分享2") {
      return {
        "title": "点击了分享按钮2"
      }
    }
  },

  getPhoneNumber: function(e) {
    console.info("获取手机号")
    e.detail.iv
    e.detail.errMsg
    e.detail.encryptedData
  },
})
