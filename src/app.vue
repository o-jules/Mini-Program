<script lang="typescript">
import wepy from 'wepy'
import { WxAppConfig } from 'wepy/config'
import 'wepy-async-function'

/**
 * 自定义的 App class
 * @class
 */
class AppClass extends wepy.app {
    public config: WxAppConfig = {
        pages: [
            'pages/main',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black',
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

/**
 * You need to do this to escape the faults of the toolchain
 */
export default function AppMain(...args: Array<any>) {
    return new AppClass(args)
}
</script>
