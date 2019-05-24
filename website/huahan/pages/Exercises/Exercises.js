// pages/Exercises/Exercises.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testnum:[],
    classnum:0,
    _testnum:{},
    num:0,
    // items: [
    //   { name: 'USA', value: '美国' },
    //   { name: 'CHN', value: '中国', checked: 'true' },
    //   { name: 'BRA', value: '巴西' },
    //   { name: 'JPN', value: '日本' },
    //   { name: 'ENG', value: '英国' },
    //   { name: 'TUR', value: '法国' },
    // ]
  },
  // radioChange(e) {
  //   console.log('radio发生change事件，携带value值为：', e.detail.value)
  // },
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
          var datanum = issue.split(/<p>/g);
          datanum=datanum[1];
          datanum=datanum.split(/<\/p>/g);
          issue=datanum[0];
        }
        console.log(dataissue);
        console.log(issue);
        this.setData({
          testnum: res.data,
          classnum: res.data.length,
          _testnum: res.data[numb]
        })
          // console.log(_testnum);
        // var datanum = testnum[0].e_issue;
        // var num=datanum.split(/<p>/g);
        // num=num[1];
        // num=num.split(/<\/p>/g);
        // num=num[0];
        // console.log(num);
        // console.log(this.data.testnum[0].e_issue);
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