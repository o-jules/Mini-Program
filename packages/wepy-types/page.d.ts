import Component from "./component";
import { WxWindowConfig } from './config';

/**
 * 微信小程序页面类
 * @class
 */
export default class Page<DATA = {}, COMPUTED = {}> extends Component<void, DATA, COMPUTED> {
    /**
     * 小程序单页的配置（主要是窗口配置），编译后生成同名的 .json 文件
     */
    public readonly config?: WxWindowConfig;

    /**
     * 监听页面加载（生命周期函数）
     * @param option
     */
    public onLoad(option: PageOnLoadOption);

    /**
     * 监听页面初次渲染完成（生命周期函数）
     */
    public onReady();

    /**
     * 监听页面显示（生命周期函数）
     */
    public onShow();

    /**
     * 监听页面隐藏（生命周期函数）
     */
    public onHide();

    /**
     * 监听页面卸载（生命周期函数）
     */
    public onUnload();

    /**
     * 监听用户下拉动作（页面相关事件处理函数）
     */
    public onPullDownRefresh();

    /**
     * 页面上拉触底事件的处理函数
     */
    public onReachBottom();

    /**
     * 用户点击右上角转发
     */
    public onShareAppMessage();

    /**
     * 页面滚动触发事件的处理函数
     */
    public onPageScroll();

    /**
     * 当前是 tab 页时，点击 tab 时触发
     */
    public onTabItemTap(item: {
        index: number
        pagePath: string
        text: string
    });
}

export interface PageOnLoadOption {}
