// pages/Exercises/Exercises.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testnum:[],//每个类的所有数据
    _testnum:{},//获取的单个数据对象
    answers:[],//选择项的相关信息
    classnum:0,//保存数据条数
    num:0,//下标
    rightnum:0,
    errornum:0,
    select:'',
    eid:0,
  },
  //获取数据成功
  successFun: function (res, selfObj) {
    var _testnum=res[0];
    var answers=[
      { selects: 'A', answer: _testnum.e_a, queen: _testnum.e_true,eid:_testnum.e_id },
      { selects: 'B', answer: _testnum.e_b, queen: _testnum.e_true,eid:_testnum.e_id },
      { selects: 'C', answer: _testnum.e_c, queen: _testnum.e_true,eid:_testnum.e_id },
      { selects: 'D', answer: _testnum.e_d, queen: _testnum.e_true,eid:_testnum.e_id },
    ];
    console.log(answers);
    selfObj.setData({
      testnum: res,
      classnum: res.length,
      _testnum: _testnum,
      eid:_testnum.e_id,
      answers:answers
    })
  },
  //选择的按钮事件
  selectenter:function(e){
  var select=e.currentTarget.dataset.select;
  var eid=e.currentTarget.dataset.eid;
  var _testnum=this.data._testnum;
  var eidd=this.data.eid;
  var rightnums=this.data.rightnum;
  var errornums=this.data.errornum;
  // console.log(rightnum);
  // console.log(errornum);
  // console.log(_testnum);

  if(select==_testnum.e_true && eidd==eid){
    var rightnum=rightnum++;
  }else{
    var errornum=errornum++;
  }
  this.setData({
    select,
    rightnum,
    errornum,
    })
  },


//下一题和上一题的事件
  jumpenter:function(e){
    var numbe = this.data.num;
    var testnum = this.data.testnum;
    var pid = e.currentTarget.dataset.pid;//获取按钮的pid
    console.log(pid);
    if(pid==2 && numbe<testnum.length){
      numbe++;
    }else if(numbe>0 && pid==1){
      numbe--
    }
      this.setData({
        num:numbe,
        _testnum:testnum[numbe],
        answers:[
          { selects: 'A', answer: testnum[numbe].e_a, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
          { selects: 'B', answer: testnum[numbe].e_b, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
          { selects: 'C', answer: testnum[numbe].e_c, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
          { selects: 'D', answer: testnum[numbe].e_d, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
        ],
        select:'',
        eid:testnum[numbe].e_id
    });
    // console.log(this.data.answers);
    console.log(this.data._testnum);
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
    app.request.requestGetApi(url, params, this, this.successFun, this.failFun);
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