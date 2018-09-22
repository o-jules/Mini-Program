const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showName: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    motto: 'Never give up!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  attached() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          const userInfo = res.userInfo || {}
          app.globalData.userInfo = userInfo
          this.setData({
            userInfo: userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo: function(e) {
      console.log(e)
      const userInfo = e.detail.userInfo
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  }
})
