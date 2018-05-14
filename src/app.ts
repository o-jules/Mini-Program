import wepy from 'wepy'
import 'wepy-async-function'

class AppWrap extends wepy.app {
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

    constructor(...args: Array<any>) {
        super(args)
        this.use('requestfix')
    }

    onLaunch = () => {
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

    testAsync = async () => {
        const data = await this.sleep(3)
        console.log(data)
    }

    getUserInfo = (cb?: (info: UserInfo) => void): Nullable<UserInfo> | void => {
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

export default function App(...args: Array<any>) {
    return new AppWrap(args)
}
