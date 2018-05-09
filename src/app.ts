import wepy from 'wepy'
import 'wepy-async-function'

export default class App extends wepy.app {
    public config: WxAppConfig = {
        pages: [
            'pages/main/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        }
    }

    globalData = {
        userInfo: null
    }

    constructor() {
        super()
        this.use('requestfix')
    }

    onLaunch() {
        this.testAsync()
    }

    sleep = (s: number) => {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    resolve('promise resolved')
                },
                s * 1000)
        })
    }

    async testAsync() {
        const data = await this.sleep(3)
        console.log(data)
    }

    getUserInfo(cb?: (info: UserInfo) => void): Nullable<UserInfo> | void {
        const that = this
        if (this.globalData.userInfo) {
            return this.globalData.userInfo
        }

        wepy.getUserInfo({
            success: (res) => {
                that.globalData.userInfo = res.userInfo
                if (cb) {
                    cb(res.userInfo)
                }
            }
        })
    }
}
