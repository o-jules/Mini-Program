import App from "./app";
import Page from "./page";
import Mixin from "./mixin";

/**
 * 微信小程序组件类
 * @class
 */
export default abstract class Component<DATA = {}, COMPUTED = {}> {
    /**
     * @member 组件名称
     */
    public $name: string;

    /**
     * @member 是否是组件，如果是页面，此值为false。
     */
    public $isComponent: boolean;

    /**
     * @member 父组件的引用
     */
    public $parent: Page | App;

    /**
     * @member 组件所在的Page对象，如果当前组件是Page对象，那么$root的值就是自己本身。
     */
    public $root: Page;

    /**
     * @member 组件的子组件列表。
     */
    public $coms: {
        [name: string]: Component;
    }

    /**
     * @member 组件所注入的Mixin对象。
     */
    public $mixins: Array<Mixin>;

    /**
     * @member 组件的 data
     */
    public abstract data?: DATA;

    /**
     * @member 组件的 computed 数据对象
     */
    public computed?: COMPUTED;

    /**
     * @member 组件需要响应的事件列表。
     */
    public methods: {
        [name: string]: (...args: Array<any>) => any;
    }

    /**
     * 对原有小程序的setData的封装。
     */
    public setData(key: string, data: any): void;
    public setData(newData: {
        [key: string]: any
    }): void;

    /**
     * 相当于全局方法getCurrentPages()。
     */
    public getCurrentPages(): any;

    /**
     * 通过组件名称路径查找组件对象
     * @param com - 组件名
     */
    public $getComponent(com: string): Component<any, any>;

    /**
     * 调用另一组件的方法。
     * @param componentName - 组件名
     * @param type - 组件中的方法
     * @param config - 参数配置
     */
    public $invoke(componentName: string, type: string, config: any): Promise<any>;

    /**
     * 件发起一个广播事件。
     * @param eventName - 事件名
     * @param args - 所传递的参数
     */
    public $broadcast(eventName: string, ...args: Array<any>): void;

    /**
     * 组件发起一个冒泡事件。
     * @param eventName - 事件名
     * @param args - 所传递的参数
     */
    public $emit(eventName: string, ...args: Array<any>): void;

    /**
     * ：组件发起脏检查。
     * @param callback
     */
    $apply(callback?: () => void): void;

    /**
     * 组件数据绑定完成后的回调事件，v1.6.1以上可用。
     * @since v1.6.1
     * @param callback
     */
    $nextTick(callback?: () => void): void;
}

export interface ComponentProps {
}
