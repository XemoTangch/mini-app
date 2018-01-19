var util = require('../../utils/util.js');
//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数 据
   */
  data: {
    event_list : '',
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    // background: '',
    domain: app.globalData.domain,
    indicatorDots: true, // 是否显示指示点
    vertical: true,
    autoplay: true, // 是否自动播放
    interval: 3000, // 图片轮播时间间隔
    duration: 500   // 轮播动画持续时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var event_list = wx.getStorageSync('event_list_1');
    if(!event_list){
      console.info('请求开始');
      wx.request({
        url: app.globalData.domain + '/api/event/NearbyList', //仅为示例，并非真实的接口地址
        data: {
          uid: '28117',
          city_id: '77',
          page: '1',
          size: '10',
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.info('success');
          console.log(res.data);        
          event_list = res.data;
          wx.setStorageSync('event_list_1', res.data);
        },
        fail: function (res) {
          console.info('fail');
        },
        complete: function (res) {
          console.info('complete');
        }
      });
    }
    console.info('页面开始加载');
    console.info(event_list.obj);
    // console.info(util.formatTime(1514367864));
    this.setData({
      event_list: event_list.obj
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info('初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info('页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.info('页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.info('页面隐藏');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.info('用户下拉');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.info('页面触底');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.info('用户点击分享');
  },

  /**
   * 轮播图
   */
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function(e){
    console.info('触发下拉刷新');
    // 判断是否需要更新
    var has_function = util.updateTip(wx.startPullDownRefresh);
    if(!has_function) return false;

  }

})