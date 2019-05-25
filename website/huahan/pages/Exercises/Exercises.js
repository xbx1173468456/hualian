// pages/Exercises/Exercises.js
const app=getApp();
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
<<<<<<< HEAD
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
=======
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
>>>>>>> b3208f52455ed13cfae60e669eb265b882141309
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
<<<<<<< HEAD
    var url =app.apiUrl + '/exam/getExam';
    var params={
      t_id:tid
    }
    app.request.requestGetApi(url, params, this, this.successFun, this.failFun)
=======
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
>>>>>>> b3208f52455ed13cfae60e669eb265b882141309
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