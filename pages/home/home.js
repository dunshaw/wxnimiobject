const appInstance = getApp();
const { globalData: { defaultCity, defaultCounty } } = appInstance

Page({
  data: {
    banners:[
      "https://nie.res.netease.com/r/pic/20190227/c59e7a39-912b-4c8c-9b4c-ddad9a3e1e56.jpg",
      "https://nie.res.netease.com/r/pic/20190227/0fe3bef1-d528-4a69-b4d6-3142cdcaac53.jpg",
      "https://nie.res.netease.com/r/pic/20190227/ea9cb439-3257-48d4-9169-adef7ada4493.jpg"
    ],
    location: defaultCity,
    county: defaultCounty,
    searchValue:'',
    my_icons:[
      {path:'info',title:'招聘1',color:'',url:'../../pages/recruit/recruit'},
      {path:'warn',title:'招聘2',color:'orange',url:''},
      {path:'success',title:'招聘3',color:'purple',url:''},
      {path:'waiting',title:'招聘4',color:'red',url:''},
    ]
  },
  onLoad: function () {

  },
  onShow:function(){
    const { globalData: { defaultCity, defaultCounty } } = appInstance
    this.setData({
      location: defaultCity,
      county: defaultCounty
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../switchcity/switchcity'
    })
  },
  bindsearchTap:function(){
    wx.navigateTo({
      url: '../searchbar/searchbar'
    })
  }
})