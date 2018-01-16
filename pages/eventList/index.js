Page({

  /**
   * 页面的初始数 据
   */
  data: {
    event_list : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.event_list = wx.getStorageSync('event_list_1');
    if(!this.event_list){
      wx.request({
        url: 'http://apitest.imhaiguiapp.com/api/event/NearbyList', //仅为示例，并非真实的接口地址
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
          this.event_list = res.data;
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info(this.event_list);
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