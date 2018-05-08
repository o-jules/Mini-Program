
declare module 'wepy' {
    export default Wepy
}

declare const Wepy: {
    app: new () => App;

    component: new <DATA>() => Component<DATA> & DATA;

    event: new () => WeEvent;

    page: new <DATA, COMPUTED = {}, METHOD = {}>() => Page<DATA> & DATA & COMPUTED & METHOD;

    mixin: new () => Mixin;

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
declare abstract class Page<T> extends Component<T> {
    public abstract config?: Partial<WxWindowConfig>;

    public $name: string;

    public $parent: any;

    public $apply(): void;

    public $invoke(name: string, type: string, config: any): Promise<any>;
}

/**
 * 微信小程序组件类
 * @class
 */
declare abstract class Component<T> {
    public abstract data?: T;
}

/**
 * 微信小程序应用实例
 * @class
 */
declare class App {
    public use(plugin: string);
}

declare class WeEvent {
}

declare class Mixin {
}

declare interface ComponentProps {

}
