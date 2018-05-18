
declare module 'wepy' {
    export default Wepy
}

declare const Wepy: {
    app: new (...args: Array<any>) => WxApp;

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
 * 微信小程序组件类
 * @class
 */
declare abstract class WxComponent<T> {
    /**
     * @member 组件名称
     */
    public $name: string

    /**
     * @member 是否是组件，如果是页面，此值为false。
     */
    public $isComponent: boolean

    /**
     * @member 父组件的引用
     */
    public $parent: WxPage<any> | WxApp

    /**
     * @member 组件所在的Page对象，如果当前组件是Page对象，那么$root的值就是自己本身。
     */
    public $root: WxPage<any>

    /**
     * @member 组件的子组件列表。
     */
    public $coms: {
        [name: string]: WxComponent<any>
    }

    /**
     * @member 组件所注入的Mixin对象。
     */
    public $mixins: Array<WxMixin>

    /**
     * @member 组件的 data
     */
    public abstract data?: T

    /**
     * @member 组件需要响应的事件列表。
     */
    public methods: {
        [name: string]: (...args: Array<any>) => any
    }

    /**
     * 对原有小程序的setData的封装。
     */
    public setData(key: string, data: any): void
    public setData(newData: {
        [key: string]: any
    }): void

    /**
     * 相当于全局方法getCurrentPages()。
     */
    public getCurrentPages(): any

    /**
     * 通过组件名称路径查找组件对象
     * @param com
     */
    public $getComponent(com: string): WxComponent<any>

    /**
     * 调用另一组件的方法。
     * @param name
     * @param type
     * @param config
     */
    public $invoke(name: string, type: string, config: any): Promise<any>

    /**
     * 件发起一个广播事件。
     * @param eventName
     * @param args
     */
    public $broadcast(eventName: string, ...args: Array<any>): void

    /**
     * 组件发起一个冒泡事件。
     * @param eventName
     * @param param1
     */
    public $emit(eventName: string, ...args: Array<any>): void

    /**
     * ：组件发起脏检查。
     * @param callback
     */
    $apply(callback?: () => void): void

    /**
     * 组件数据绑定完成后的回调事件，v1.6.1以上可用。
     * @since v1.6.1
     * @param callback
     */
    $nextTick(callback?: () => void): void
}

/**
 * 微信小程序页面类
 * @class
 */
declare abstract class WxPage<T> extends WxComponent<T> {
    /**
     * 小程序单页的配置（主要是窗口配置），编译后生成同名的 .json 文件
     * @member
     */
    public abstract config?: WxWindowConfig
}

/**
 * 微信小程序应用实例
 * @class
 */
declare abstract class WxApp {
    public abstract config: WxAppConfig

    public use(addon: string, ...args: Array<any>): void
    public use<T>(addon: { new (): T; name: string }, ...args: Array<any>): void


    public $wxapp: any

    public $pages: {
        [key: string]: WxPage<any>
    }

    public $interceptors: {
        [key: string]: any
    }
}

declare class WxEvent {
}

declare class WxMixin {
}

declare interface ComponentProps {
}
