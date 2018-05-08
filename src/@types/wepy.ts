
declare module 'wepy' {
    export default Wepy
}

declare const Wepy: {
    app: new () => App;

    component: new () => Component;

    mixin: new () => Mixin;

    page: new <DATA, COMPUTED = {}, METHOD = {}>() => Page<DATA> & DATA & COMPUTED & METHOD;

    downloadFile: (option: { url: string }) => Promise<any>;

    getFileInfo: (option: { filePath: string }) => Promise<any>;

    getUserInfo: (option: { lang: string }) => Promise<any>;

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
declare class Page<T> {
    public config: WxWindowConfig;

    public data: T;

    public $name: string;

    public $parent: any;

    public $apply(): void;

    public $invoke(name: string, type: string, config: any): Promise<any>;

}

declare class Component {
}

declare class App { }

declare interface Mixin {
}

declare interface ComponentProps {

}
