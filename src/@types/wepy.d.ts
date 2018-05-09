
declare module 'wepy' {
    export default Wepy
}

declare const Wepy: {
    app: new () => WxApp;

    component: new <DATA>() => WxComponent<DATA> & DATA;

    event: new () => WxEvent;

    page: new <DATA, COMPUTED = {}>() => WxPage<DATA> & DATA & COMPUTED;

    mixin: new () => WxMixin;

    downloadFile: (option: { url: string }) => Promise<any>;

    getFileInfo: (option: { filePath: string }) => Promise<any>;

    getUserInfo: (option: {
        lang?: string
        success?: (res) => void
    }) => Promise<any>;

    login: () => Promise<any>;

    navigateTo: (option: { url: string }) => void;

    navigateBack: () => void;

    request: (option: {
        url: string
        success: (res: any) => void
    }) => Promise<any>;

    requestPayment: (option: {
        timeStamp: string
        nonceStr: string
        package: string
        signType: string
        paySign: string
    }) => Promise<any>;

    uploadFile: (option: {
        url: string
        filePath: string
        name: string
        header?: { [key in string]: any }
        formData: FormData | { [key in string]: any }
    }) => Promise<any>;

};

/**
 * 微信小程序页面类
 * @class
 */
declare abstract class WxPage<T> extends WxComponent<T> {
    /**
     * 小程序单页的配置（主要是窗口配置），编译后生成同名的 .json 文件
     * @member
     */
    public abstract config?: WxWindowConfig;

    public $name: string;

    public $apply(): void;

    public $invoke(name: string, type: string, config: any): Promise<any>;
}

/**
 * 微信小程序组件类
 * @class
 */
declare abstract class WxComponent<T> {
    /**
     * 父组件的引用
     * @member
     */
    public $parent: any;

    /**
     * 组件的 data
     */
    public abstract data?: T;
}

/**
 * 微信小程序应用实例
 * @class
 */
declare abstract class WxApp {
    public abstract config: WxAppConfig;

    public use(addon: string, ...args: Array<any>): void;
    public use<T>(addon: { new (): T; name: string }, ...args: Array<any>): void;

}

declare class WxEvent {
}

declare class WxMixin {
}

declare interface ComponentProps {

}
