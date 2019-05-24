// pages/Exercises/Exercises.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testnum:[],/**获取的数据 */
    classnum:0,/**获取数据的个数 */
    _testnum:{},/**每个参数对象 */
    num:0,
  },
  /**
   * 定义试题前进后退
   */
  jumpprev:function(){
    var numbe=this.data.num;
    var testnum=this.data.testnum;
    var _testnum = this.data._testnum
    if(numbe>0){
      numbe--;
    }
    this.setData({
      num:numbe,
      _testnum: testnum[numbe]
      })
    console.log(_testnum);
  },

  jumpnext:function(){
    var numbe = this.data.num;
    var testnum = this.data.testnum;
    var _testnum=this.data._testnum
    if(numbe>=0 && numbe<testnum.length){
      numbe++;
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
    var numb=this.data.num;
    wx.request({
      url: 'http://c27.yidongwei.com/exam/getExam?t_id='+tid,
      success:(res)=>{
        var dataissue=res.data;
        for(var i=0;i<dataissue.length;i++){
          var issue=dataissue[i].e_issue;
          var datanum = issue.split(/<p>/);
          datanum=datanum[1];
          console.log(typeof(datanum));
          datanum=datanum.split(/<\/p>/);
          console.log(datanum);
          dataissue[i].e_issue=datanum[0];
        }
        this.setData({
          testnum:dataissue,
          classnum: dataissue.length,
          _testnum: dataissue[numb]
        })
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