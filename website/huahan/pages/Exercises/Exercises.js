// pages/Exercises/Exercises.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testnum:[],
    classnum:0,
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t_id=options.tid;
    wx.request({
      url: 'http://c27.yidongwei.com/exam/getExam?t_id=' + t_id,
      success:(res)=>{
        this.setData({
          testnum:res.data,
          classnum:res.data.length
        })
        var testnum=this.data.testnum;
        // var datanum = testnum[0].e_issue;
        // var num=datanum.split(/<p>/g);
        // num=num[1];
        // num=num.split(/<\/p>/g);
        // num=num[0];
        // console.log(num);
        // console.log(this.data.testnum[0].e_issue);
        // console.log(this.data.classnum);
        // console.log(testnum);
        for(let i=0;i<testnum.length;i++){
          
        }

      }
    })
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