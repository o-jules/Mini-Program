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
}
