// pages/content/content.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yearid:[],
    classnum:0,
    classnums:0,
    testarr:[],
    t_id:0,
    rightnum:0,
    errornum:0,
    ans:0,
  },
  //获取数据成功
  successFun:function(res,selfObj){
    selfObj.setData({
          testarr:res,
          classnum:res.length,
        });
        // console.log(res);
    // var food={
    //   classnum:res.length,
    //   testarr:res,
    //   errornum:0,
    //   rightnum:0,
    //   rtnum:0,
    // };
    //   wx.setStorageSync('food',food)
  },
  

  // formSubmit(e) {
  //   console.log('form发生了submit事件，携带数据为：', e.detail.value)
  // },
  // formReset() {
  //   console.log('form发生了reset事件')
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.t_id=options.t_id;
    var tid=this.data.t_id;
    var url = app.apiUrl + '/exam/getExam';
    var params={
      t_id:tid
    };
  app.request.requestGetApi(url,params,this,this.successFun,this.failFun);
  },
  gorandompractice:function(){
    var tid=this.data.t_id;
    wx.navigateTo({
      url: "../Exercises/Exercises?t_id="+tid,
    })
    wx.getStorage({
      key: 'food',
      success: function(res) {
        console.log(res);
      },
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
    var rightnum=this.data.rightnum;
    var classnums=this.data.classnums;
    if(rightnum>0&&classnums>0){
      var ans=rightnum/classnums;
      console.log(ans)
          ans = app.returnFloat(30)
    }
    console.log(ans);
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