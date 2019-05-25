// pages/Exercises/Exercises.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testnum:[],
    classnum:0,
    _testnum:{},
    num:0,
  },
  //获取数据成功
  successFun: function (res, selfObj) {
    var numb = this.data.num;
    console.log(res);
    var data=res[numb];
    var answer=[
      {clas:'A',e_answer:data.e_a},
      {clas:'B',e_answer:data.e_b},
      {clas:'C',e_answer:data.e_c},
      {clas:'D',e_answer:data.e_d}
      ];
    selfObj.setData({
      testnum: answer,
      classnum: res.length,
      _testnum: res[numb]
    })
    console.log(this.data.testnum);
  },
//下一题和上一题的事件
  jumpenter:function(e){
    var numbe = this.data.num;
    var testnum = this.data.testnum;
    var _testnum=this.data._testnum;
    var pid = e.currentTarget.dataset.pid;
    console.log(pid);
    if(pid==2 && numbe<testnum.length){
      numbe++;
    }else if(numbe>0 && pid==1){
      numbe--
    }
      this.setData({
        num:numbe,
        _testnum: testnum[numbe]
    })
    console.log(_testnum);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tid=options.t_id;
    var url =app.apiUrl + '/exam/getExam';
    var params={
      t_id:tid
    }
    app.request.requestGetApi(url, params, this, this.successFun, this.failFun)
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
    var numb = this.data.num;
    var testnum=this.data.testnum;
    this.setData({
      // _testnum:testnum[numb]
    })
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