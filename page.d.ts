import Component from "./component";
import { WxWindowConfig } from './config';

/**
 * 微信小程序页面类
 * @class
 */
export default abstract class Page<DATA = {}, COMPUTED = {}> extends Component<DATA, COMPUTED> {
    /**
     * 小程序单页的配置（主要是窗口配置），编译后生成同名的 .json 文件
     * @member
     */
    public abstract config?: WxWindowConfig;

    /**
     * 页面装载的生命周期勾子
     * @param option
     */
    public onLoad(option: PageOnLoadOption);

    /**
     * 页面挂载的生命周期勾子
     */
    public onUnload();

    /**
     * 页面显示的生命周期勾子
     */
    public onShow();

    /**
     * 页面隐藏的生命周期勾子
     */
    public onHide();
}

export interface PageOnLoadOption {}
