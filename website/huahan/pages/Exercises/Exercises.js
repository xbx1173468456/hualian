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
    num:1,//下标
    rightnum:0,
    errornum:0,
    select:'',
    eid:0,
    classnums:0,
    fn:true
  },
  
  //选择的按钮事件
  selectenter:function(e){
  var select=e.currentTarget.dataset.select;
  console.log(select);
  var eid=e.currentTarget.dataset.eid;
  var _testnum=this.data._testnum;
  var eidd=this.data.eid;
  var rightnum=this.data.rightnum;
  var errornum=this.data.errornum;
  var fn=this.data.fn;

  if(select==_testnum.e_true && eidd==eid){
       rightnum++;
       fn=false
  }else{
       errornum++;
       fn=false
  }
  this.setData({
    select,
    rightnum,
    errornum,
    flag:_testnum.e_true,
    fn
    })
  },


//下一题和上一题的事件
  jumpenter:function(e){
    var numbe = this.data.num;
    var testnum = this.data.testnum;
    var rightnum=this.data.rightnum;
    var errornum=this.data.errornum;
    var classnums=this.data.classnums;
    var pid = e.currentTarget.dataset.pid;//获取按钮的pid
    if (pid == 2 && numbe < testnum.length){
      numbe++;
      classnums++;
    }else if(numbe>0 && pid==1){
      numbe--;
      classnums--
    }
      this.setData({
        num:numbe,
        _testnum: testnum[numbe],
        answers:[
    { selects: 'A', answer: testnum[numbe].e_a, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
    { selects: 'B', answer: testnum[numbe].e_b, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
    { selects: 'C', answer: testnum[numbe].e_c, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
    { selects: 'D', answer: testnum[numbe].e_d, queen:testnum[numbe].e_true,eid:testnum[numbe].e_id },
        ],
        select:'',
        eid:testnum[numbe].e_id,
        classnums,
    });
    console.log(this.data._testnum);
//给上个页面传递数据
    var pages = getCurrentPages();
    var prepage = pages[pages.length - 2];//获取到的上一个页面的对象
    console.log(classnums);
    console.log(prepage);
    prepage.setData({
      classnums: classnums,
      rightnum,
      errornum,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tid = options.t_id;
    var url = app.apiUrl + '/exam/getExam';
    var params = {
      t_id: tid
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
})