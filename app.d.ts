import Page from "./page";

/**
 * 微信小程序应用实例
 * @class
 */
export default abstract class App {
    public abstract config: WxAppConfig;

    public use(addon: string, ...args: Array<any>): void;
    public use<T>(addon: { new (): T; name: string }, ...args: Array<any>): void;

    public $wxapp: any;

    public $pages: {
        [key: string]: Page<any>;
    }

    public $interceptors: {
        [key: string]: any;
    }
}
