import Page from "./page";
import { WxAppConfig } from './config';

/**
 * 微信小程序应用实例
 * @class
 */
export default class App {
    public readonly config: WxAppConfig;

    public readonly $wxapp: any;

    public readonly $pages: {
        [key: string]: Page<any>;
    }

    public readonly $interceptors: {
        [key: string]: any;
    }

    /**
     * 使用插件
     * @param addon - 插件名
     * @param args - 传递给插件的参数
     */
    public use(addon: string, ...args: Array<any>): void;

    /**
     * 使用插件
     * @param addon - 插件类对象
     * @param args - 传递给插件的参数
     */
    public use<T>(addon: { new (): T; name: string }, ...args: Array<any>): void;

    /**
     * 生命周期函数--监听小程序初始化
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     * 
     * @param options
     */
    public onLaunch(options: AppOpenParam);

    /**
     * 生命周期函数--监听小程序显示
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     * 
     * @param options
     */
    public onShow(options: AppOpenParam);

    /**
     * 生命周期函数--监听小程序隐藏
     * 当小程序从前台进入后台，会触发 onHide
     */
    public onHide();

    /**
     * 错误监听函数
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    public onError();

    /**
     * 页面不存在监听函数
     * 当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数，详见下文
     */
    public onPageNotFound(option: {
        /**
         * 不存在页面的路径
         */
        path: string;

        /**
         * 打开不存在页面的 query
         */
        query: {
            [key in string]: string;
        };
        
        /**
         * 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
         */
        isEntryPage: boolean;
    });
}

export interface AppOpenParam {
    /**
     * 打开小程序的路径
     */
    path: string;

    /**
     * 打开小程序的query
     */
    query: {
        [key in string]: string;
    };

    /**
     * 打开小程序的场景值
     */
    scene: number;

    /**
     * shareTicket，详见 获取更多转发信息
     */
    shareTicket: string;

    /**
     * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
     */
    referrerInfo: {
        /**
         * 来源小程序或公众号或App的 appId，详见下方说明
         */
        appId: string;
        /**
         * 来源小程序传过来的数据，scene=1037或1038时支持
         */
        extraData: object;
    };

}
