
/**
 * 微信小程序应用配置
 * @interface
 */
export interface WxAppConfig {
	/**
	 * 设置页面路径
	 * @property
	 */
	pages: Array<string>;

	/**
	 * 设置默认页面的窗口表现
	 * @property
	 */
	window?: WxWindowConfig;

	/**
	 * 设置底部 tab 的表现
	 * @property
	 */
	tabBar?: TabBarConfig;

	/**
	 * 设置网络超时时间
	 * @property
	 */
	networkTimeout?: WxNetworkConfig;

	/**
	 * 设置是否开启 debug 模式
	 * @property
	 */
	debug?: boolean;
}

interface TabBarConfig {
	/**
	 * tab 上的文字默认颜色
	 * @property
	 */
	color: string;

	/**
	 * tab 上的文字选中时的颜色
	 * @property
	 */
	selectedColor: string;

	/**
	 * tab 的背景色
	 * @property
	 */
	backgroundColor: string;

	/**
	 * tabbar上边框的颜色， 仅支持 black/white
	 * @property
	 */
	borderStyle?: 'black' | 'white';

	/**
	 * tab 的列表，最少 2 个，最多 5 个tab
	 * @property
	 */
	list: Array<{
			/**
			 * 页面路径，必须在 pages 中先定义
			 * @property
			 */
			pagePath: string;

			/**
			 * tab 上按钮文字
			 * @property
			 */
			text: string;

			/**
			 * 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
			 * @property
			 */
			iconPath?: string;

			/**
			 * 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
			 * @property
			 */
			selectedIconPath?: string;
	}>

	position?: 'bottom' | 'top';
}

interface WxNetworkConfig {
	/**
	 * wx.request 的超时时间，单位毫秒，默认为：60000
	 * @property
	 */
	request?: number;

	/**
	 * wx.connectSocket 的超时时间，单位毫秒，默认为：60000
	 */
	connectSocket?: number;

	/**
	 * wx.uploadFile 的超时时间，单位毫秒，默认为：60000
	 */
	uploadFile?: number;

	/**
	 * wx.downloadFile 的超时时间，单位毫秒，默认为：60000
	 */
	downloadFile?: number;
}

/**
* 微信窗口配置
* @interface
*/
export interface WxWindowConfig {
	/**
	 * 导航栏背景颜色
	 * 默认值：
	 * @property
	 */
	navigationBarBackgroundColor?: string;

	/**
	 * 导航栏标题颜色，仅支持 black/white
	 * 默认值：white
	 * @property
	 */
	navigationBarTextStyle?: 'black' | 'white';

	/**
	 * 导航栏标题文字内容
	 * @property
	 */
	navigationBarTitleText?: string;

	/**
	 * 窗口的背景色
	 * 默认值：#ffffff
	 * @property
	 */
	backgroundColor?: string;

	/**
	 * 下拉 loading 的样式，仅支持 dark/light
	 * 默认值：dark
	 * @property
	 */
	backgroundTextStyle?: 'dark' | 'light';

	/**
	 * 是否开启下拉刷新
	 * 默认值：false
	 * @property
	 */
	enablePullDownRefresh?: boolean;

	/**
	 * 设置为 true 则页面整体不能上下滚动；只在 page.json 中有效，无法在 app.json 中设置该项
	 * 默认值：false
	 * @property
	 */
	disableScroll?: boolean;

	/**
	 * 页面上拉触底事件触发时距页面底部距离，单位为px
	 * 默认值：50
	 * @property
	 */
	onReachBottomDistance?: number;
}
