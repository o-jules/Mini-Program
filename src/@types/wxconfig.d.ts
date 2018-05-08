
/**
 * 微信窗口配置
 * @interface
 */
declare interface WxWindowConfig {
    navigationBarBackgroundColor?: string;
    navigationBarTextStyle?: 'black' | 'white';
    navigationBarTitleText?: string;
    backgroundColor?: string;
    backgroundTextStyle?: 'dark' | 'light';
    enablePullDownRefresh?: boolean;
    disableScroll?: boolean;
    onReachBottomDistance?: number;
}
