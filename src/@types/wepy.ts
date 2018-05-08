
declare module 'wepy' {
    export default Wepy
}

declare const Wepy: {
    app: new () => App;

    component: new <DATA>() => Component & DATA;

    mixin: new () => Mixin;

    page: new <DATA, COMPUTED = {}, METHOD = {}>() => Page<DATA> & DATA & COMPUTED & METHOD;

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
        success: (res: any) => void;
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
declare abstract class Page<T> {
    public config?: WxWindowConfig;

    public abstract data?: T;

    public $name: string;

    public $parent: any;

    public $apply(): void;

    public $invoke(name: string, type: string, config: any): Promise<any>;
}

declare class Component {
}

declare class App {
    public use(plugin: string);
}

declare interface Mixin {
}

declare interface ComponentProps {

}
