// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIndicator:true,  // 是否显示指示点
    isAutoplay:true,    // 是否自动播放
    current:0,  //当前滑块
    interval:3000, // 自动切换时间
    duration:500,  // 滑的时间
    imgsrc:[
      '/images/banner/01.jpg',
      '/images/banner/02.jpg',
      '/images/banner/03.jpg',
      '/images/banner/04.jpg',
    ]
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

  }
})