/// <reference path="types.d.ts" />

import * as CSS from 'csstype';

export = wxml;
export as namespace wxml;

declare namespace wxml {
    /**
     * 版本
     */
    type Version = "release" | "develop" | "trial";

    interface IntrinsicAttributes {
        key?: string | number;
    }

    interface IntrinsicClassAttributes<T> {}

    interface Element {
        class?: string;
        id?: string;
        style?: CSS.Properties<string | number>;
    }

    interface Event<D = {}> {
        type: string;
        timeStamp: number;
        currentTarget: {
            dataset: { [key in string]: any };
        } & any;
        target: any;
        detail: D;
    }

    interface EventHandle<D = {}> {
        (event: Event<D>): void;
    }

    interface BlockElement {}

    /**
     * 视图容器。
     */
    interface ViewElement extends Element {
        /**
         * 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
         * 默认值：none
         */
        hoverClass?: string;

        /**
         * 指定是否阻止本节点的祖先节点出现点击态
         * 默认值：false
         * @since 1.5.0
         */
        hoverStopPropagation?: string;

        /**
         * 按住后多久出现点击态，单位毫秒
         * 默认值：50
         */
        hoverStartTime?: number;

        /**
         * 手指松开后点击态保留时间，单位毫秒
         * 默认值：400
         */
        hoverStayTime?: number;
    }

    /**
     * 可滚动视图区域。
     */
    interface ScrollViewElement extends Element {
        /**
         * 允许横向滚动
         * 默认值：false
         */
        scrollX?: boolean;

        /**
         * 允许纵向滚动
         * 默认值：false
         */
        scrollY?: boolean;

        /**
         * 距顶部/左边多远时（单位px），触发 scrolltoupper 事件
         * 默认值：50
         */
        upperThreshold?: number;

        /**
         * 距底部/右边多远时（单位px），触发 scrolltolower 事件
         * 默认值：50
         */
        lowerThreshold?: number;

        /**
         * 设置竖向滚动条位置
         */
        scrollTop?: number;

        /**
         * 设置横向滚动条位置
         */
        scrollLeft?: number;

        /**
         * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
         */
        scrollIntoView?: string;

        /**
         * 在设置滚动条位置时使用动画过渡
         * 默认值：false
         */
        scrollWithAnimation?: boolean;

        /**
         * iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
         * 默认值：false
         */
        enableBackToTop?: boolean;

        /**
         * 滚动到顶部/左边，会触发 scrolltoupper 事件
         */
        bindscrolltoupper?: EventHandle;

        /**
         * 滚动到底部/右边，会触发 scrolltolower 事件
         */
        bindscrolltolower?: EventHandle;

        /**
         * 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
         */
        bindscroll?: EventHandle<{
            scrollLeft: number;
            scrollTop: number;
            scrollHeight: number;
            scrollWidth: number;
            deltaX: number;
            deltaY: number;
        }>;
    }

    /**
     * 滑块视图容器。
     * 注意：其中只可放置<swiper-item/>组件，否则会导致未定义的行为。
     */
    interface SwiperElement extends Element {
        /**
         * 是否显示面板指示点。
         * 默认值：false
         */
        indicatorDots?: boolean;

        /**
         * 指示点颜色。
         * 默认值：rgba(0, 0, 0, .3)
         *
         * @since 1.1.0
         */
        indicatorColor?: Color;

        /**
         * 当前选中的指示点颜色。
         * 默认值：#000000
         *
         * @since 1.1.0
         */
        indicatorActiveColor?: Color;

        /**
         * 是否自动切换。
         * 默认值：false
         */
        autoplay?: boolean;

        /**
         * 当前所在滑块的 index。
         * 默认值：0
         */
        current?: number;

        /**
         * 当前所在滑块的 item-id ，不能与 current 被同时指定。
         * 默认值：	""
         * @since 1.9.0
         */
        currentItemId?: string;

        /**
         * 自动切换时间间隔。
         * 默认值：5000
         */
        interval?: number;

        /**
         * 滑动动画时长。
         * 默认值：500
         */
        duration?: number;

        /**
         * 是否采用衔接滑动。
         * 默认值：false。
         */
        circular?: boolean;

        /**
         * 滑动方向是否为纵向。
         * 默认值：false。
         */
        vertical?: boolean;

        /**
         * 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值。
         * 默认值："0px"。
         * @since 1.9.0
         */
        previousMargin?: string;

        /**
         * 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值。
         * 默认值："0px"
         * @since 1.9.0
         */
        nextMargin?: string;

        /**
         * 同时显示的滑块数量
         * 默认值：1
         * @since 1.9.0
         */
        displayMultipleItems?: number;

        /**
         * 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息。
         * 默认值：false
         * @since 1.9.0
         */
        skipHiddenItemLayout?: boolean;

        /**
         * current 改变时会触发 change 事件，event.detail = {current: current, source: source}。
         * 从 1.4.0 开始，change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下：
         *   - autoplay 自动播放导致swiper变化；
         *   - touch 用户划动引起swiper变化；
         *   - 其他原因将用空字符串表示。
         */
        bindchange?: EventHandle;

        /**
         * 动画结束时会触发 animationfinish 事件，event.detail 同上。
         * @since 1.9.0
         */
        bindanimationfinish: EventHandle;
    }

    /**
     * 仅可放置在<swiper/>组件中，宽高自动设置为100%。
     */
    interface SwiperItemElement extends Element {
        /**
         * 该 swiper-item 的标识符。
         * 默认值：""
         * @since 1.9.0
         */
        itemId?: string;
    }

    /**
     * 可移动的视图容器，在页面中可以拖拽滑动。
     * 基础库 1.2.0 开始支持，低版本需做兼容处理。
     * @since 1.2.0
     */
    interface MovableViewElement extends Element {
        /**
         * movable-view的移动方向，属性值有 all、vertical、horizontal、none。
         * 默认值：none
         */
        direction?: "all" | "vertical" | "horizontal" | "none";

        /**
         * movable-view是否带有惯性。
         * 默认值：false
         */
        inertia?: boolean;
        /**
         * 超过可移动区域后，movable-view是否还可以移动。
         * 默认值：false
         */
        outOfBounds?: boolean;

        /**
         * 定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画。
         */
        x?: number | string;

        /**
         * 定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画。
         */
        y?: number | string;

        /**
         * 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快。
         * 默认值：20
         */
        damping?: number;

        /**
         * 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值。
         * 默认值：2
         */
        friction?: number;

        /**
         * 是否禁用。
         * 默认值：false
         * @since 1.9.90
         */
        disabled?: boolean;

        /**
         * 是否支持双指缩放，默认缩放手势生效区域是在movable-view内。
         * 默认值：false
         * @since 1.9.90
         */
        scale?: boolean;

        /**
         * 定义缩放倍数最小值。
         * 默认值：0.5
         * @since 1.9.90
         */
        scaleMin?: number;

        /**
         * 定义缩放倍数最大值。
         * 默认值：10
         * @since 1.9.90
         */
        scaleMax?: number;

        /**
         * 定义缩放倍数，取值范围为 0.5 - 10。
         * 默认值：1
         * @since 1.9.90
         */
        scaleValue?: number;

        /**
         * 是否使用动画。
         * 默认值：true
         * @since 2.1.0
         */
        animation?: boolean;

        /**
         * 拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动）、touch-out-of-bounds（超出移动范围）、out-of-bounds（超出移动范围后的回弹）、friction（惯性）和空字符串（setData）。
         * @since 1.9.90
         */
        bindchange?: EventHandle;

        /**
         * 缩放过程中触发的事件，event.detail = {x: x, y: y, scale: scale}，其中x和y字段在2.1.0之后开始支持返回。
         * @since 1.9.90
         */
        bindscale?: EventHandle;
    }

    /**
     * movable-view 的可移动区域。
     * 基础库 1.2.0 开始支持，低版本需做兼容处理。
     * 注意：movable-area 必须设置width和height属性，不设置默认为10px。
     * @since 1.2.0
     */
    interface MovableAreaElement extends Element {
        /**
         * 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area。
         * 默认值：false
         * @since 1.9.90
         */
        scaleArea: boolean;
    }

    /**
     * 覆盖在原生组件之上的文本视图，可覆盖的原生组件包括map、video、canvas、camera、live-player、live-pusher，只支持嵌套cover-view、cover-image，可在cover-view中使用button。
     * 基础库 1.4.0 开始支持，低版本需做兼容处理。
     *
     * - tip: 基础库 2.2.4 起支持 touch 相关事件，也可使用 hover-class 设置点击态
     * - tip: 基础库 2.1.0 起支持设置 scale rotate 的 css 样式，包括 transition 动画
     * - tip: 基础库 1.9.90 起 cover-view 支持 overflow: scroll，但不支持动态更新 overflow
     * - tip: 基础库 1.9.90 起最外层 cover-view 支持 position: fixed
     * - tip: 基础库 1.9.0 起支持插在 view 等标签下。在此之前只可嵌套在原生组件map、video、canvas、camera内，避免嵌套在其他组件内。
     * - tip: 基础库 1.6.0 起支持css transition动画，transition-property只支持transform (translateX, translateY)与opacity。
     * - tip: 基础库 1.6.0 起支持css opacity。
     * - tip: 事件模型遵循冒泡模型，但不会冒泡到原生组件。
     * - tip: 文本建议都套上cover-view标签，避免排版错误。
     * - tip: 只支持基本的定位、布局、文本样式。不支持设置单边的border、background-image、shadow、overflow: visible等。
     * - tip: 建议子节点不要溢出父节点
     * - tip: 默认设置的样式有：white-space: nowrap; line-height: 1.2; display: block;
     * - bug: 自定义组件嵌套 cover-view 时，自定义组件的 slot 及其父节点暂不支持通过 wx:if 控制显隐，否则会导致 cover-view 不显示
     */
    interface CoverViewElement extends Element {
        /**
         * 设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效
         * @since 2.1.0
         */
        scrollTop: number;
    }

    /**
     * 覆盖在原生组件之上的图片视图，可覆盖的原生组件同cover-view，支持嵌套在cover-view里。
     * 基础库 1.4.0 开始支持，低版本需做兼容处理。
     */
    interface CoverImageElement extends Element {
        /**
         * 图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。
         */
        src: string;

        /**
         * 图片加载成功时触发
         * @since 2.1.0
         */
        bindload: EventHandle;

        /**
         * 图片加载失败时触发
         * @since 2.1.0
         */
        binderror: EventHandle;
    }

    /**
     * 图标。
     */
    interface IconElement extends Element {
        /**
         * icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear。
         * @type {string}
         */
        type:
            | "success"
            | "success_no_circle"
            | "info"
            | "warn"
            | "waiting"
            | "cancel"
            | "download"
            | "search"
            | "clear";

        /**
         * icon的大小，单位px。
         * 默认值：23
         */
        size?: number;

        /**
         * icon的颜色，同css的color。
         */
        color?: Color;
    }

    /**
     * 文本。
     * <text/> 组件内只支持 <text/> 嵌套。
     */
    interface TextElement extends Element {
        /**
         * 文本是否可选
         * 默认值：false
         * @since 1.1.0
         */
        selectable?: boolean;

        /**
         * 显示连续空格。
         * 各个操作系统的空格标准并不一致。
         *
         * - ensp 中文字符空格一半大小
         * - emsp 中文字符空格大小
         * - nbsp 根据字体设置的空格大小
         *
         * @since 1.4.0
         */
        space?: "ensp" | "emsp" | "nbsp";

        /**
         * 是否解码；
         * 默认值：false
         *
         * decode可以解析的有 &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;
         * @since 1.4.0
         */
        decode?: boolean;
    }

    interface RichTextNodeText {
        type: "text";

        /**
         * 文本。支持entities
         */
        text: string;
    }

    interface RichTextNodeNode {
        type: "node";

        /**
         * 标签名。支持部分受信任的HTML节点
         */
        name: string;

        /**
         * 属性。支持部分受信任的属性，遵循Pascal命名法
         */
        attrs?: object;

        /**
         * 子节点列表
         */
        children?: Array<RichTextNode | string>;
    }

    type RichTextNode = RichTextNodeText | RichTextNodeNode;

    /**
     * 富文本。
     * 基础库 1.4.0 开始支持，低版本需做兼容处理。
     */
    interface RichTextElement extends Element {
        /**
         * 节点列表 / HTML String。
         * nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降
         * 默认值：[]
         * @since 1.4.0
         */
        nodes?: Array<RichTextNode> | string;
    }

    /**
     * 进度条。
     */
    interface ProgressElement extends Element {
        /**
         * 百分比 0~100
         */
        percent?: number;

        /**
         * 在进度条右侧显示百分比。
         * 默认值：false
         */
        showInfo?: boolean;

        /**
         * 进度条线的宽度，单位px
         * 默认值：6
         */
        strokeWidth?: number;

        /**
         * 进度条颜色 （请使用 activeColor）。
         * 默认值：#09BB07
         */
        color?: Color;

        /**
         * 已选择的进度条的颜色。
         */
        activeColor?: Color;

        /**
         * 未选择的进度条的颜色。
         */
        backgroundColor?: string;

        /**
         * 进度条从左往右的动画。
         * 默认值：false
         */
        active?: boolean;

        /**
         * backwards: 动画从头播；forwards：动画从上次结束点接着播。
         * 默认值：backwards
         * @since 1.7.0
         */
        activeMode?: "backwards" | "forwards";
    }

    /**
     * 按钮。
     */
    interface ButtonElement extends Element {
        /**
         * 按钮的大小。
         * 默认值：default
         */
        size?: "default" | "mini";

        /**
         * 按钮的样式类型。
         * 默认值：default
         */
        type?: "primary" | "default" | "warn";

        /**
         * 按钮是否镂空，背景色透明。
         * 默认值：false
         */
        plain?: boolean;

        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled: boolean;

        /**
         * 名称前是否带 loading 图标。
         * 默认值：false
         */
        loading: boolean;

        /**
         * 用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件
         */
        formType: string;

        /**
         * 微信开放能力。
         * @since 1.1.0
         */
        openType: string;

        /**
         * 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果。
         * 默认值：button-hover
         */
        hoverClass?: string;

        /**
         * 指定是否阻止本节点的祖先节点出现点击态。
         * 默认值：false
         * @since 1.5.0
         */
        hoverStopPropagation?: boolean;

        /**
         * 按住后多久出现点击态，单位毫秒。
         * 默认值：20
         */
        hoverStartTime?: number;

        /**
         * 手指松开后点击态保留时间，单位毫秒。
         * 默认值：70
         */
        hoverStayTime?: number;

        /**
         * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。open-type="getUserInfo"。
         * 默认值：en
         * @since 1.3.0
         */
        lang?: string;

        /**
         * 会话来源。open-type="contact"。
         * 默认值：1.4.0
         */
        sessionFrom?: string;

        /**
         * 当前标题。会话内消息卡片标题。open-type="contact"。
         * 默认值：1.5.0
         */
        sendMessageTitle?: string;

        /**
         * 当前分享路径。会话内消息卡片点击跳转小程序路径。open-type="contact"。
         * 默认值：1.5.0
         */
        sendMessagePath?: string;

        /**
         * 截图。会话内消息卡片图片。open-type="contact"。
         * @since 1.5.0
         */
        sendMessageImg?: string;

        /**
         * 显示会话内消息卡片。open-type="contact"。
         * 默认值：false
         * @since 1.5.0
         */
        showMessageCard?: boolean;

        /**
         * 打开 APP 时，向 APP 传递的参数。open-type="launchApp"。
         * @since 1.9.5
         */
        appParameter?: string;

        /**
         * 当使用开放能力时，发生错误的回调。open-type="launchApp"。
         * @since 1.9.5
         */
        binderror?: EventHandle;

        /**
         * 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致。open-type="getUserInfo"。
         * @since 1.3.0
         */
        bindgetuserinfo?: EventHandle;

        /**
         * 客服消息回调。open-type="contact"。
         * @since 1.5.0
         */
        bindcontact?: EventHandle;

        /**
         * 获取用户手机号回调。open-type="getPhoneNumber"。
         * @since 1.2.0
         */
        bindgetphonenumber?: EventHandle;

        /**
         * 在打开授权设置页后回调。open-type="openSetting"。
         * @since 2.0.7
         */
        bindopensetting?: EventHandle;
    }

    /**
     * 多项选择器，内部由多个checkbox组成。
     */
    interface CheckboxGroupElement extends Element {
        /**
         * <checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}
         */
        bindchange?: EventHandle;
    }

    /**
     * 多选项目。
     */
    interface CheckboxElement extends Element {
        /**
         * <checkbox/>标识，选中时触发<checkbox-group/>的 change 事件，并携带 <checkbox/> 的 value。
         */
        value?: string;

        /**
         * 是否禁用。
         * false
         */
        disabled?: boolean;

        /**
         * 当前是否选中，可用来设置默认选中。
         * false
         */
        checked?: boolean;

        /**
         * checkbox的颜色，同css的color
         */

        color?: Color;
    }

    /**
     * 表单，将组件内的用户输入的<switch/> <input/> <checkbox/> <slider/> <radio/> <picker/> 提交。
     * 当点击 <form/> 表单中 formType 为 submit 的 <button/> 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。
     */
    interface FormElement extends Element {
        /**
         * 是否返回 formId 用于发送模板消息。
         */
        reportSubmit?: boolean;

        /**
         * 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}。
         */
        bindsubmit?: EventHandle;

        /**
         * 表单重置时会触发 reset 事件。
         */
        bindreset?: EventHandle;
    }

    /**
     * 输入框。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。
     */
    interface InputElement extends Element {
        /**
         * 输入框的初始内容。
         */
        value?: string;

        /**
         * input 的类型。
         * 默认值："text"
         */
        type?: string;

        /**
         * 是否是密码类型。
         * 默认值：false
         */
        password?: boolean;

        /**
         * 输入框为空时占位符。
         */
        placeholder?: string;

        /**
         * 指定 placeholder 的样式。
         */
        placeholderStyle?: string;

        /**
         * 指定 placeholder 的样式类。
         * 默认值："input-placeholder"
         */
        placeholderClass?: string;

        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled?: boolean;

        /**
         * 最大输入长度，设置为 -1 的时候不限制最大长度。
         * 默认值：140
         */
        maxlength?: number;

        /**
         * 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
         * 默认值：0
         */
        cursorSpacing?: number;

        /**
         * (即将废弃，请直接使用 focus )自动聚焦，拉起键盘。
         * 默认值：false
         */
        autoFocus?: boolean;

        /**
         * 获取焦点。
         * 默认值：false
         */
        focus?: boolean;

        /**
         * 设置键盘右下角按钮的文字，仅在type='text'时生效。
         * 默认值："done"
         * @since 1.1.0
         */
        confirmType?: string;

        /**
         * 点击键盘右下角按钮时是否保持键盘不收起。
         * 默认值：false
         * @since 1.1.0
         */
        confirmHold?: boolean;

        /**
         * 指定focus时的光标位置。
         * @since 1.5.0
         */
        cursor?: number;

        /**
         * 光标起始位置，自动聚集时有效，需与selection-end搭配使用。
         * 默认值：-1
         * @since 1.9.0
         */
        selectionStart?: number;

        /**
         * 光标结束位置，自动聚集时有效，需与selection-start搭配使用。
         * 默认值：-1
         * @since 1.9.0
         */
        selectionEnd?: number;

        /**
         * 键盘弹起时，是否自动上推页面。
         * 默认值：true
         * @since 1.9.90
         */
        adjustPosition?: boolean;

        /**
         * 键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。
         */
        bindinput?: EventHandle;

        /**
         * 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持
         */
        bindfocus?: EventHandle;

        /**
         * 输入框失去焦点时触发，event.detail = {value: value}
         */
        bindblur?: EventHandle;

        /**
         * 点击完成按钮时触发，event.detail = {value: value}
         */
        bindconfirm?: EventHandle;
    }

    /**
     * 用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。
     * for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。
     * 目前可以绑定的控件有：<button/>, <checkbox/>, <radio/>, <switch/>。
     */
    interface LabelElement extends Element {
        /**
         * 绑定控件的 id
         */
        for: string;
    }

    /**
     * 普通选择器
     */
    interface PickerSelector extends Element {
        mode: "selector";

        /**
         * mode为 selector 或 multiSelector 时，range 有效。
         * 默认值：[]
         */
        range: Array<string>; // Array / Object Array;

        /**
         * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
         */
        rangeKey: string;

        /**
         * value 的值表示选择了 range 中的第几个（下标从 0 开始）
         * 默认值：0
         */
        value?: number;

        /**
         * value 改变时触发 change 事件，event.detail = {value: value}
         */
        bindchange: EventHandle;

        /**
         * 是否禁用
         * 默认值：false
         */
        disabled?: boolean;

        /**
         * 取消选择或点遮罩层收起 picker 时触发
         * @since 1.9.90
         */
        bindcancel: EventHandle;
    }

    /**
     * 多列选择器（最低版本：1.4.0）
     * @since 1.4.0
     */
    interface PickerMultiSelector extends Element {
        mode: "multiSelector";

        /**
         * mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a","b"], ["c","d"]]。
         * 默认值：[]
         */
        range?: Array<Array<string>>; // 二维Array / 二维Object Array;
        /**
         * 当 range 是一个 二维Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
         */
        rangeKey?: string;

        /**
         * value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）
         * 默认值：[]
         */
        value?: Array<number>;

        /**
         * value 改变时触发 change 事件，event.detail = {value: value}。
         */
        bindchange?: EventHandle;

        /**
         * 某一列的值改变时触发 columnchange 事件，event.detail = {column: column, value: value}，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标。
         */
        bindcolumnchange?: EventHandle;

        /**
         * 取消选择时触发。
         * @since 1.9.90
         */
        bindcancel?: EventHandle;

        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled?: boolean;
    }

    /**
     * 时间选择器
     */
    interface PickerTime extends Element {
        mode: "time";

        /**
         * 表示选中的时间，格式为"hh:mm"。
         */
        value?: string;

        /**
         * 表示有效时间范围的开始，字符串格式为"hh:mm"。
         */
        start?: string;

        /**
         * 表示有效时间范围的结束，字符串格式为"hh:mm"。
         */
        end?: string;

        /**
         * value 改变时触发 change 事件，event.detail = {value: value}。
         */
        bindchange?: EventHandle;

        /**
         * 取消选择时触发。
         * @since 1.9.90
         */
        bindcancel?: EventHandle;
        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled?: boolean;
    }

    /**
     * 日期选择器
     */
    interface PickerDate extends Element {
        mode: "date";

        /**
         * 表示选中的日期，格式为"YYYY-MM-DD"。
         * 默认值：0
         */
        value?: string;

        /**
         * 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"
         */
        start?: string;

        /**
         * 表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"
         */
        end?: string;

        /**
         * 有效值 year,month,day，表示选择器的粒度。
         * 默认值：day。
         * - year  选择器粒度为年
         * - month 选择器粒度为月份
         * - day   选择器粒度为天
         */
        fields?: "year" | "month" | "day";

        /**
         * value 改变时触发 change 事件，event.detail = {value: value}
         */
        bindchange?: EventHandle;

        /**
         * 取消选择时触发
         * @since 1.9.90
         */
        bindcancel?: EventHandle;

        /**
         * 是否禁用
         * 默认值：false
         */
        disabled?: boolean;
    }

    /**
     * 省市区选择器（最低版本：1.4.0）
     * @since 1.4.0
     */
    interface PickerRegion extends Element {
        mode: "region";

        /**
         * 表示选中的省市区，默认选中每一列的第一个值
         * 默认值：[]
         */
        value?: Array<string>;

        /**
         * 可为每一列的顶部添加一个自定义的项
         * @since 1.5.0
         */
        customItem?: string;

        /**
         * value 改变时触发 change 事件，event.detail = {value: value, code: code, postcode: postcode}，其中字段code是统计用区划代码，postcode是邮政编码
         */
        bindchange?: EventHandle;

        /**
         * 取消选择时触发
         * @since 1.9.90
         */
        bindcancel?: EventHandle;

        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled?: boolean;
    }

    /**
     * 从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。
     */
    type PickerElement =
        | PickerSelector
        | PickerMultiSelector
        | PickerTime
        | PickerDate
        | PickerRegion;

    /**
     * 嵌入页面的滚动选择器
     */
    interface PickerViewElement extends Element {
        /**
         * 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。
         */
        value?: Array<number>;

        /**
         * 设置选择器中间选中框的样式
         */
        indicatorStyle?: string;

        /**
         * 设置选择器中间选中框的类名
         * @since 1.1.0
         */
        indicatorClass?: string;

        /**
         * 设置蒙层的样式
         * @since 1.5.0
         */
        maskStyle?: string;

        /**
         * 设置蒙层的类名
         * @since 1.5.0
         */
        maskClass?: string;

        /**
         * 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）
         */
        bindchange?: EventHandle;
    }

    /**
     * 仅可放置于<picker-view />中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致。
     */
    interface PickerViewColumnElement extends Element {}

    /**
     * 单项选择器，内部由多个<radio/>组成。
     */
    interface RadioGroupElement extends Element {
        /**
         * <radio-group/> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}
         */
        bindchange?: EventHandle;
    }

    /**
     * 单选项目
     */
    interface RadioElement extends Element {
        /**
         * <radio/> 标识。当该<radio/> 选中时，<radio-group/> 的 change 事件会携带<radio/>的value。
         */
        value?: string;

        /**
         * 当前是否选中。
         * false
         */
        checked?: boolean;

        /**
         * 是否禁用。
         * false
         */
        disabled?: boolean;

        /**
         * radio的颜色，同css的color
         */
        color?: Color;
    }

    /**
     * 滑动选择器。
     */
    interface SliderElement extends Element {
        /**
         * 最小值。
         * 默认值：0
         */
        min?: number;

        /**
         * 最大值。
         * 默认值：100
         */
        max?: number;

        /**
         * 步长，取值必须大于 0，并且可被(max - min)整除。
         * 默认值：1
         */
        step?: number;

        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled?: boolean;

        /**
         * 当前取值。
         * 默认值：0
         */
        value?: number;

        /**
         * 背景条的颜色（请使用 backgroundColor）。
         * 默认值：#e9e9e9
         */
        color: Color;

        /**
         * 已选择的颜色（请使用 activeColor）。
         * 默认值：#1aad19
         */
        selectedColor: Color;

        /**
         * 已选择的颜色。
         * 默认值：#1aad19
         */
        activeColor: Color;

        /**
         * 背景条的颜色。
         * 默认值：#e9e9e9
         */
        backgroundColor: Color;

        /**
         * 滑块的大小，取值范围为 12 - 28。
         * 默认值：28
         * @since 1.9.0
         */
        blockSize?: number;

        /**
         * 滑块的颜色。
         * 默认值：#ffffff
         * @since 1.9.0
         */
        blockColor: Color;

        /**
         * 是否显示当前 value。
         * 默认值：false
         */
        showValue?: boolean;

        /**
         * 完成一次拖动后触发的事件，event.detail = {value: value}
         */
        bindchange?: EventHandle;

        /**
         * 拖动过程中触发的事件，event.detail = {value: value}
         * @since 1.7.0
         */
        bindchanging?: EventHandle;
    }

    /**
     * 开关选择器。
     */
    interface SwitchElement extends Element {
        /**
         * 是否选中。
         * 默认值：false
         */
        checked?: boolean;

        /**
         * 样式，有效值：switch, checkbox。
         * 默认值：switch
         */
        type?: "switch" | "checkbox";

        /**
         * checked 改变时触发 change 事件，event.detail={ value: checked }。
         */
        bindchange?: EventHandle;

        /**
         * switch 的颜色，同 css 的 color。
         */
        color?: Color;
    }

    /**
     * 多行输入框。该组件是[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)，使用时请注意相关限制。
     */
    interface TextareaElement extends Element {
        /**
         * 输入框的内容。
         */
        value?: string;

        /**
         * 输入框为空时占位符。
         */
        placeholder?: string;

        /**
         * 指定 placeholder 的样式。
         */
        placeholderStyle?: string;

        /**
         * 指定 placeholder 的样式类。
         * 默认值：textarea-placeholder
         */
        placeholderClass?: string;

        /**
         * 是否禁用。
         * 默认值：false
         */
        disabled?: boolean;

        /**
         * 最大输入长度，设置为 -1 的时候不限制最大长度。
         * 默认值：140
         */
        maxlength: number;

        /**
         * 自动聚焦，拉起键盘。
         * 默认值：false
         */
        autoFocus?: boolean;

        /**
         * 获取焦点。
         * 默认值：false
         */
        focus?: boolean;

        /**
         * 是否自动增高，设置auto-height时，style.height不生效。
         * 默认值：false
         */
        autoHeight?: boolean;

        /**
         * 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true。
         * 默认值：false
         */
        fixed?: boolean;

        /**
         * 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
         * 默认值：0
         */
        cursorSpacing: number;

        /**
         * 指定focus时的光标位置。
         * @since 1.5.0
         */
        cursor?: number;

        /**
         * 是否显示键盘上方带有”完成“按钮那一栏。
         * 默认值：true
         *  @since 1.6.0
         */
        showConfirmBar?: boolean;

        /**
         * 光标起始位置，自动聚集时有效，需与selection-end搭配使用。
         * 默认值：-1
         * @since 1.9.0
         */
        selectionStart?: number;

        /**
         * 光标结束位置，自动聚集时有效，需与selection-start搭配使用。
         * 默认值：-1
         * @since 1.9.0
         */
        selectionEnd?: number;

        /**
         * 键盘弹起时，是否自动上推页面。
         * 默认值：true
         * @since 1.9.90
         */
        adjustPosition?: boolean;

        /**
         * 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持。
         */
        bindfocus?: EventHandle;

        /**
         * 输入框失去焦点时触发，event.detail = {value, cursor}。
         */
        bindblur?: EventHandle;

        /**
         * 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}。
         */
        bindlinechange?: EventHandle;

        /**
         * 当键盘输入时，触发 input 事件，event.detail = {value, cursor}，bindinput 处理函数的返回值并不会反映到 textarea 上。
         */
        bindinput?: EventHandle;

        /**
         * 点击完成时， 触发 confirm 事件，event.detail = {value: value}。
         */
        bindconfirm?: EventHandle;
    }

    /**
     * 页面链接。
     */
    interface NavigatorElement extends Element {
        /**
         * 在哪个目标上发生跳转，默认当前小程序。
         * @since 2.0.7
         */
        target?: string;

        /**
         * 当前小程序内的跳转链接。
         */
        url: string;

        /**
         * 跳转方式。
         * 默认值：navigate
         */
        openType?: string;

        /**
         * 当 open-type 为 'navigateBack' 时有效，表示回退的层数。
         */
        delta?: number;

        /**
         * 当target="miniProgram"时有效，要打开的小程序 appId。
         * @since 2.0.7
         */
        appId?: string;

        /**
         * 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页
         * @since 2.0.7
         */
        path?: string;

        /**
         * 当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。详情
         * @since 2.0.7
         */
        extraData: any;

        /**
         * 当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。
         * 默认值：release
         * @since 2.0.7
         */
        version: Version;

        /**
         * 指定点击时的样式类，当hover-class="none"时，没有点击态效果。
         * 默认值：navigator-hover
         */
        hoverClass?: string;

        /**
         * 指定是否阻止本节点的祖先节点出现点击态。
         * 默认值：false
         * @since 1.5.0
         */
        hoverStopPropagation?: boolean;

        /**
         * 按住后多久出现点击态，单位毫秒。
         * 默认值：50
         */
        hoverStartTime?: number;

        /**
         * 手指松开后点击态保留时间，单位毫秒。
         * 默认值：600
         */
        hoverStayTime?: number;

        /**
         * 当target="miniProgram"时有效，跳转小程序成功。
         * @since 2.0.7
         */
        bindsuccess?: string;

        /**
         * 当target="miniProgram"时有效，跳转小程序失败。
         * @since 2.0.7
         */
        binderror?: string;

        /**
         * 当target="miniProgram"时有效，跳转小程序完成。
         * @since 2.0.7
         */
        bindcomplete?: string;
    }

    /**
     * 这个组件从小程序基础库版本 2.1.0 开始支持。
     * 仅在插件的自定义组件中有效，用于跳转到插件功能页。
     * @since 2.1.0
     */
    interface FunctionalPageNavigatorElement extends Element {
        /**
         * 跳转到的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版）；线上版本必须设置为 release。
         * 默认值：release
         * @since 2.1.0
         */
        version?: Version;

        /**
         * 要跳转到的功能页
         * @since 2.1.0
         */
        name?: string;

        /**
         * 功能页参数，参数格式与具体功能页相关。
         * 默认值：null
         * @since 2.1.0
         */
        args?: any;

        /**
         * 功能页返回，且操作成功时触发， detail 格式与具体功能页相关。
         * @since 2.1.0
         */
        bindsuccess?: EventHandle;

        /**
         * 功能页返回，且操作失败时触发， detail 格式与具体功能页相关。
         * @since 2.1.0
         */
        bindfail?: EventHandle;
    }

    /**
     * 音频。
     * 注意：1.6.0 版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口
     * @deprecated
     */
    interface AudioElement extends Element {
        /**
         * audio 组件的唯一标识符。
         */
        id?: string;

        /**
         * 要播放音频的资源地址。
         */
        src?: string;

        /**
         * 是否循环播放。
         * 默认值：false
         */
        loop?: boolean;

        /**
         * 是否显示默认控件。
         * 默认值：false
         */
        controls?: boolean;

        /**
         * 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效。
         */
        poster?: string;

        /**
         * 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效。
         * 默认值：未知音频
         */
        name?: string;

        /**
         * 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效。
         * 默认值：未知作者
         */
        author?: string;

        /**
         * 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}。
         *
         * MediaError.code
         * - 1	获取资源被用户禁止
         * - 2	网络错误
         * - 3	解码错误
         * - 4	不合适资源
         */
        binderror?: EventHandle;

        /**
         * 当开始/继续播放时触发play事件。
         */
        bindplay?: EventHandle;

        /**
         * 当暂停播放时触发 pause 事件。
         */
        bindpause?: EventHandle;

        /**
         * 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}。
         */
        bindtimeupdate?: EventHandle;

        /**
         * 当播放到末尾时触发 ended 事件。
         */
        bindended?: EventHandle;
    }

    /**
     * 图片。
     * {@link https://developers.weixin.qq.com/miniprogram/dev/component/image.html | 组件/媒体组件/image}
     */
    interface ImageElement extends Element {
        /**
         * 图片裁剪、缩放的模式
         * 默认值：scaleToFill
         * mode 有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式。
         *
         *   模式	值              说明
         *   缩放	scaleToFill     不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
         *   缩放	aspectFit       保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
         *   缩放	aspectFill      保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
         *   缩放	widthFix        宽度不变，高度自动变化，保持原图宽高比不变
         *   裁剪	top             不缩放图片，只显示图片的顶部区域
         *   裁剪	bottom          不缩放图片，只显示图片的底部区域
         *   裁剪	center          不缩放图片，只显示图片的中间区域
         *   裁剪	left            不缩放图片，只显示图片的左边区域
         *   裁剪	right           不缩放图片，只显示图片的右边区域
         *   裁剪	top left        不缩放图片，只显示图片的左上边区域
         *   裁剪	top right       不缩放图片，只显示图片的右上边区域
         *   裁剪	bottom left     不缩放图片，只显示图片的左下边区域
         *   裁剪	bottom right    不缩放图片，只显示图片的右下边区域
         */
        mode?:
            | "scaleToFill"
            | "aspectFit"
            | "aspectFill"
            | "widthFix"
            | "top"
            | "bottom"
            | "center"
            | "left"
            | "right"
            | "top left"
            | "top right"
            | "bottom left"
            | "bottom right";

        /**
         * 图片懒加载。只针对page与scroll-view下的image有效
         * false
         * @since 1.5.0
         */
        lazyLoad?: boolean;

        /**
         * 当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}
         */
        binderror?: EventHandle;

        /**
         * 当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}
         */
        bindload?: EventHandle;

        /**
         * 图片资源地址，支持云文件ID（2.2.3起）
         */
        src?: string | null;
    }

    /**
     * 弹幕
     */
    interface Danmu {
        text: string;
        color: Color;
        time: number;
    }

    /**
     * 视频。该组件是原生组件，使用时请注意相关限制。
     * <video /> 默认宽度300px、高度225px，可通过wxss设置宽高。
     */
    interface VideoElement extends Element {
        /**
         * 要播放视频的资源地址，支持云文件ID（2.2.3起）。
         */
        src?: string;

        /**
         * 指定视频初始播放位置。
         * @since 1.6.0
         */
        initialTime?: number;

        /**
         * 指定视频时长。
         * @since 1.1.0
         */
        duration?: number;

        /**
         * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）。
         * 默认值：true
         */
        controls?: boolean;

        /**
         * 弹幕列表。
         */
        danmuList?: Array<Danmu>;

        /**
         * 是否显示弹幕按钮，只在初始化时有效，不能动态变更。
         * 默认值：false
         */
        danmuBtn?: boolean;

        /**
         * 是否展示弹幕，只在初始化时有效，不能动态变更。
         * 默认值：false
         */
        enableDanmu?: boolean;

        /**
         * 是否自动播放。
         * 默认值：false
         */
        autoplay?: boolean;

        /**
         * 是否循环播放。
         * 默认值：false
         * @since 1.4.0
         */
        loop?: boolean;

        /**
         * 是否静音播放。
         * 默认值：false
         * @since 1.4.0
         */
        muted?: boolean;

        /**
         * 在非全屏模式下，是否开启亮度与音量调节手势。
         * 默认值：false
         * @since 1.6.0
         */
        pageGesture?: boolean;

        /**
         * 设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。
         * @since 1.7.0
         */
        direction?: number;

        /**
         * 若不设置，宽度大于240时才会显示。
         * 默认值：true
         * @since 1.9.0
         */
        showProgress?: boolean;

        /**
         * 是否显示全屏按钮。
         * 默认值：true
         * @since 1.9.0
         */
        showFullscreenBtn?: boolean;

        /**
         * 是否显示视频底部控制栏的播放按钮。
         * 默认值：true
         * @since 1.9.0
         */
        showPlayBtn?: boolean;

        /**
         * 是否显示视频中间的播放按钮。
         * 默认值：true
         * @since 1.9.0
         */
        showCenterPlayBtn?: boolean;

        /**
         * 是否开启控制进度的手势。
         * 默认值：true
         * @since 1.9.0
         */
        enableProgressGesture?: boolean;

        /**
         * 当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖。
         * 默认值：contain
         */
        objectFit?: string;

        /**
         * 视频封面的图片网络资源地址或云文件ID（2.2.3起支持）如果 controls 属性值为 false 则设置 poster 无效。
         */
        poster?: string;

        /**
         * 当开始/继续播放时触发play事件。
         */
        bindplay?: EventHandle;

        /**
         * 当暂停播放时触发 pause 事件。
         */
        bindpause?: EventHandle;

        /**
         * 当播放到末尾时触发 ended 事件。
         */ bindended?: EventHandle;

        /**
         * 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次。
         */
        bindtimeupdate?: EventHandle;

        /**
         * 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal。
         * @since 1.4.0
         */
        bindfullscreenchange?: EventHandle;

        /**
         * 视频出现缓冲时触发。
         * @since 1.7.0
         */
        bindwaiting?: EventHandle;

        /**
         * 视频播放出错时触发。
         * @since 1.7.0
         */
        binderror?: EventHandle;
    }

    /**
     * 系统相机。该组件是原生组件，使用时请注意相关限制。
     * 需要用户授权 scope.camera。
     * 基础库 1.6.0 开始支持，低版本需做兼容处理。
     * @since 1.6.0
     */
    interface CameraElement extends Element {
        /**
         * 有效值为 normal, scanCode。
         * 默认值：normal
         * @since 2.1.0
         */
        mode?: string;

        /**
         * 前置或后置，值为front, back。
         * 默认值：back
         */
        devicePosition?: "front" | "back";

        /**
         * 闪光灯，值为auto, on, off。
         * 默认值：auto
         */
        flash?: string;

        /**
         * 扫码识别区域，格式为[x, y, w, h]，x,y 是相对于camera显示区域的左上角，w,h为区域宽度，单位px，仅在 mode="scanCode" 时生效。
         * @since 2.1.0
         */
        scanArea: [number, number, number, number];

        /**
         * 摄像头在非正常终止时触发，如退出后台等情况。
         */
        bindstop?: EventHandle;

        /**
         * 用户不允许使用摄像头时触发。
         */
        binderror?: EventHandle;

        /**
         * 在成功识别到一维码时触发，仅在 mode="scanCode" 时生效。
         * @since 2.1.0
         */
        bindscancode?: EventHandle;
    }

    /**
     * 实时音视频播放。该组件是原生组件，使用时请注意相关限制。
     * 暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。
     *
     * 基础库 1.7.0 开始支持，低版本需做兼容处理。
     *
     * | 一级类目   | 二级类目  |
     * |-----------|---------|
     * | 社交      | 直播 |
     * | 教育      | 在线教育 |
     * | 医疗      | 互联网医院，公立医院 |
     * | 政务民生   | 所有二级类目 |
     * | 金融      | 基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融 |
     *
     * @since 1.7.0
     */
    interface LivePlayerElement extends Element {
        /**
         * 音视频地址。目前仅支持 flv, rtmp 格式。
         */
        src: string;

        /**
         * live（直播），RTC（实时通话）。
         * live
         */
        mode?: string;

        /**
         * 自动播放。
         * 默认值：false
         */
        autoplay?: boolean;

        /**
         * 是否静音
         * 默认值：false
         */
        muted?: boolean;

        /**
         * 画面方向，可选值有 vertical，horizontal。
         * 默认值：vertical
         */
        orientation?: string;

        /**
         * 填充模式，可选值有 contain，fillCrop
         * 默认值：contain
         */
        objectFit?: string;

        /**
         * 进入后台时是否静音（已废弃，默认退台静音）。
         * 默认值：false
         */
        backgroundMute?: boolean;

        /**
         * 最小缓冲区，单位s
         * 默认值：1
         */
        minCache?: number;

        /**
         * 最大缓冲区，单位s
         * 默认值：3
         */
        maxCache?: number;

        /**
         * 播放状态变化事件，detail = {code}
         */
        bindstatechange?: EventHandle;

        /**
         * 全屏变化事件，detail = {direction, fullScreen}
         */
        bindfullscreenchange?: EventHandle;

        /**
         * 网络状态通知，detail = {info}
         * @since 1.9.0
         */
        bindnetstatus?: EventHandle;
    }

    /**
     * 实时音视频录制。该组件是原生组件，使用时请注意相关限制。
     * 需要用户授权 scope.camera、scope.record。
     * 暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

     * | 一级类目   | 二级类目  |
     * |-----------|---------|
     * | 社交      | 直播 |
     * | 教育      | 在线教育 |
     * | 医疗      | 互联网医院，公立医院 |
     * | 政务民生   | 所有二级类目 |
     * | 金融      | 基金、信托、保险、银行、证券/期货、非金融机构自营小额贷款、征信业务、消费金融 |
     *
     * 基础库 1.7.0 开始支持，低版本需做兼容处理。
     * 
     * 注意：
     * 
     * - <live-pusher /> 默认宽度为100%、无默认高度，请通过wxss设置宽高。
     * - 开发者工具上暂不支持。
     * - 相关api：wx.createLivePusherContext
     * 
     * @since 1.7.0
     */
    interface LivePusherElement extends Element {
        /**
         * 推流地址。目前仅支持 flv, rtmp 格式。
         */
        url?: string;

        /**
         * SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）。
         * 默认值：RTC
         */
        mode?: string;

        /**
         * 自动推流。
         * 默认值：false
         */
        autopush?: boolean;

        /**
         * 是否静音。
         * 默认值：false
         */
        muted?: boolean;

        /**
         * 开启摄像头。
         * 默认值：true
         */
        enableCamera?: boolean;

        /**
         * 自动聚集。
         * 默认值：true
         */
        autoFocus?: boolean;

        /**
         * vertical，horizontal。
         * 默认值：vertical
         */
        orientation?: "vertical" | "horizontal";

        /**
         * 美颜。
         * 默认值：0
         */
        beauty?: number;

        /**
         * 美白。
         * 默认值：0
         */
        whiteness?: number;

        /**
         * 宽高比，可选值有 3:4, 9:16。
         * 默认值：9:16
         */
        aspect?: string;

        /**
         * 最小码率。
         * 默认值：200
         */
        minBitrate?: number;

        /**
         * 最大码率。
         * 默认值：1000
         */
        maxBitrate?: number;

        /**
         * 进入后台时推流的等待画面
         */
        waitingImage?: string;

        /**
         * 等待画面资源的MD5值
         */
        waitingImageHash?: string;

        /**
         * 调整焦距。
         * 默认值：false
         *
         * @since 2.1.0
         */
        zoom?: boolean;

        /**
         * 进入后台时是否静音。
         * 默认值：false
         */
        backgroundMute?: boolean;

        /**
         * 状态变化事件，detail = {code}
         *
         * 状态码（code）
         *
         * | 代码   | 说明 |
         * |-------|-----|
         * | 1001  | 已经连接推流服务器 |
         * | 1002  | 已经与服务器握手完毕,开始推流 |
         * | 1003  | 打开摄像头成功 |
         * | 1004  | 录屏启动成功 |
         * | 1005  | 推流动态调整分辨率 |
         * | 1006  | 推流动态调整码率 |
         * | 1007  | 首帧画面采集完成 |
         * | 1008  | 编码器启动 |
         * | -1301  | 打开摄像头失败 |
         * | -1302  | 打开麦克风失败 |
         * | -1303  | 视频编码失败 |
         * | -1304  | 音频编码失败 |
         * | -1305  | 不支持的视频分辨率 |
         * | -1306  | 不支持的音频采样率 |
         * | -1307  | 网络断连，且经多次重连抢救无效，更多重试请自行重启推流 |
         * | -1308  | 开始录屏失败，可能是被用户拒绝 |
         * | -1309  | 录屏失败，不支持的Android系统版本，需要5.0以上的系统 |
         * | -1310  | 录屏被其他应用打断了 |
         * | -1311  | Android Mic打开成功，但是录不到音频数据 |
         * | -1312  | 录屏动态切横竖屏失败 |
         * | 1101  | 网络状况不佳：上行带宽太小，上传数据受阻 |
         * | 1102  | 网络断连, 已启动自动重连 |
         * | 1103  | 硬编码启动失败,采用软编码 |
         * | 1104  | 视频编码失败 |
         * | 1105  | 新美颜软编码启动失败，采用老的软编码 |
         * | 1106  | 新美颜软编码启动失败，采用老的软编码 |
         * | 3001  | RTMP -DNS解析失败 |
         * | 3002  | RTMP服务器连接失败 |
         * | 3003  | RTMP服务器握手失败 |
         * | 3004  | RTMP服务器主动断开，请检查推流地址的合法性或防盗链有效期 |
         * | 3005  | RTMP 读/写失败 |
         *
         */
        bindstatechange?: EventHandle;

        /**
         * 网络状态通知，detail = {info}
         *
         * 网络状态数据（info）
         *
         * | 键名  | 说明 |
         * |------|------|
         * | videoBitrate  | 当前视频编/码器输出的比特率，单位 kbps |
         * | audioBitrate  | 当前音频编/码器输出的比特率，单位 kbps |
         * | videoFPS      | 当前视频帧率 |
         * | videoGOP      | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s |
         * | netSpeed      | 当前的发送/接收速度 |
         * | netJitter     | 网络抖动情况，抖动越大，网络越不稳定 |
         * | videoWidth    | 视频画面的宽度 |
         * | videoHeight   | 视频画面的高度 |
         *
         * @since 1.9.0
         */
        bindnetstatus?: EventHandle;

        /**
         * 渲染错误事件，detail = {errMsg, errCode}
         *
         * 错误码（errCode）
         *
         * |  代码  |  说明  |
         * |-------|--------|
         * | 10001 |用户禁止使用摄像头 |
         * | 10002 | 用户禁止使用录音 |
         *
         * @since 1.7.4
         */
        binderror?: EventHandle;
    }

    /**
     * 地图。该组件是原生组件，使用时请注意相关限制。
     * map 组件使用的经纬度是火星坐标系，调用 wx.getLocation 接口需要指定 type 为 gcj02。
     */
    interface MapElement {
        /**
         * 中心经度。
         */
        longitude?: number;

        /**
         * 中心纬度。
         */
        latitude?: number;

        /**
         * 缩放级别，取值范围为5-18。
         * 默认值：16
         */
        scale?: number;

        /**
         * 标记点
         */
        markers?: Array<MapMarker>;

        /**
         * 即将移除，请使用 markers
         * @deprecated
         */
        covers?: Array<MapMarker>;

        /**
         * 路线
         */
        polyline?: Array<MapPolyline>;

        /**
         * 圆
         */
        circles?: Array<MapCircle>;

        /**
         * 控件（即将废弃，建议使用 cover-view 代替）
         * @deprecated
         */
        controls?: Array<MapControl>;

        /**
         * 缩放视野以包含所有给定的坐标点
         */
        includePoints?: Array<MapPoint>;

        /**
         * 显示带有方向的当前定位点
         */
        showLocation?: boolean;

        /**
         * 点击标记点时触发，会返回marker的id
         */
        bindmarkertap?: EventHandle;

        /**
         * 点击标记点对应的气泡时触发，会返回marker的id
         * @since 1.2.0
         */
        bindcallouttap?: EventHandle;

        /**
         * 点击控件时触发，会返回control的id
         */
        bindcontroltap?: EventHandle;

        /**
         * 视野发生变化时触发
         */
        bindregionchange?: EventHandle;

        /**
         * 点击地图时触发
         */
        bindtap?: EventHandle;

        /**
         * 在地图渲染更新完成时触发
         * @since 1.6.0
         */
        bindupdated?: EventHandle;
    }

    /**
     * 标记点用于在地图上显示标记的位置。
     */
    interface MapMarker {
        /**
         * 标记点id
         * marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。
         */
        id?: number;

        /**
         * 纬度。
         * 浮点数，范围 -90 ~ 90
         */
        latitude: number;

        /**
         * 经度。
         * 浮点数，范围 -180 ~ 180
         */
        longitude: number;

        /**
         * 标注点名
         */
        title?: string;

        /**
         * 显示的图标。
         * 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径
         */
        iconPath: string;

        /**
         * 旋转角度
         * 顺时针旋转的角度，范围 0 ~ 360，默认为 0
         */
        rotate?: number;

        /**
         * 标注的透明度。
         * 默认1，无透明，范围 0 ~ 1
         */
        alpha?: number;

        /**
         * 标注图标宽度。
         * 默认为图片实际宽度。
         */
        width?: number;

        /**
         * 标注图标高度。
         * 默认为图片实际高度。
         */
        height?: number;

        /**
         * 自定义标记点上方的气泡窗口。
         * 支持的属性见下表，可识别换行符。
         * @since 1.2.0
         */
        callout?: MarkerCallout;

        /**
         * 为标记点旁边增加标签。
         * 支持的属性见下表，可识别换行符。
         * @since 1.2.0
         */
        label?: MarkerLabel;

        /**
         * 经纬度在标注图标的锚点，默认底边中点。
         * {x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点。
         * @since 1.2.0
         */
        anchor?: { x: number; y: number };
    }

    /**
     * marker 上的气泡 callout
     */
    interface MarkerCallout {
        /**
         * 文本。
         *
         * @since 1.2.0
         */
        content?: string;

        /**
         * 文本颜色。
         *
         * @since 1.2.0
         */
        color?: string;

        /**
         * 文字大小。
         *
         * @since 1.2.0
         */
        fontSize?: number;

        /**
         * callout边框圆角。
         *
         * @since 1.2.0
         */
        borderRadius?: number;

        /**
         * 背景色。
         *
         * @since 1.2.0
         */
        bgColor?: string;

        /**
         * 文本边缘留白。
         *
         * @since 1.2.0
         */
        padding?: number;

        /**
         * 'BYCLICK':点击显示; 'ALWAYS':常显
         */
        display?: "BYCLICK" | "ALWAYS";

        /**
         * 文本对齐方式。有效值: left, right, center。
         *
         * @since 1.6.0
         */
        textAlign?: "left" | "right" | "center";
    }

    /**
     * marker 上的气泡 label
     */
    interface MarkerLabel {
        /**
         * 文本。
         * @since 1.2.0
         */
        content?: string;

        /**
         * 文本颜色。
         * @since 1.2.0
         */
        color?: string;

        /**
         * 文字大小。
         * @since 1.2.0
         */
        fontSize?: number;

        /**
         * label的坐标（废弃）。
         * @since 1.2.0
         */
        x?: number;

        /**
         * label的坐标（废弃）。
         * @since 1.2.0
         */
        y?: number;

        /**
         * label的坐标，原点是 marker 对应的经纬度。
         * @since 2.1.0
         */
        anchorX?: number;

        /**
         * label的坐标，原点是 marker 对应的经纬度。
         * @since 2.1.0
         */
        anchorY?: number;

        /**
         * 边框宽度。
         * @since 1.6.0
         */
        borderWidth?: number;

        /**
         * 边框颜色。
         * @since 1.6.0
         */
        borderColor?: Color;

        /**
         * 边框圆角。
         * @since 1.6.0
         */
        borderRadius?: number;

        /**
         * 背景色。
         * @since 1.6.0
         */
        bgColor?: Color;

        /**
         * 文本边缘留白。
         * @since 1.6.0
         */
        padding?: number;

        /**
         * 文本对齐方式。有效值: left, right, center。
         * @since 1.6.0
         */
        textAlign?: "left" | "right" | "center";
    }

    /**
     * 指定一系列坐标点，从数组第一项连线至最后一项。
     */
    interface MapPolyline {
        /**
         * 经纬度数组。
         * 默认值：[{latitude: 0, longitude: 0}]
         */
        points: Array<MapPoint>;

        /**
         * 线的颜色。
         * 8位十六进制表示，后两位表示alpha值，如：#000000AA
         */
        color?: string;

        /**
         * 线的宽度。
         */
        width?: number;
        /**
         * 是否虚线。
         * 默认值：false
         */
        dottedLine?: boolean;

        /**
         * 带箭头的线。
         * 默认值：false，开发者工具暂不支持该属性。
         *
         * @since 1.2.0
         */
        arrowLine?: boolean;

        /**
         * 更换箭头图标。
         * 在arrowLine为true时生效。
         *
         * @since 1.6.0
         */
        arrowIconPath?: string;

        /**
         * 线的边框颜色。
         * @since 1.2.0
         */
        borderColor?: string;

        /**
         * 线的厚度。
         *
         * @since 1.2.0
         */
        borderWidth?: number;
    }

    /**
     * 在地图上显示圆
     */
    interface MapCircle {
        /**
         * 纬度。
         * 浮点数，范围 -90 ~ 90。
         */
        latitude: number;

        /**
         * 经度。
         * 浮点数，范围 -180 ~ 180。
         */
        longitude?: number;

        /**
         * 描边的颜色。
         * 8位十六进制表示，后两位表示alpha值，如：#000000AA
         */
        color: string;

        /**
         * 填充颜色。
         * 8位十六进制表示，后两位表示alpha值，如：#000000AA
         */
        fillColor: string;

        /**
         * 半径。
         */
        radius: number;

        /**
         * 描边的宽度。
         */
        strokeWidth?: number;
    }

    /**
     * 在地图上显示控件，控件不随着地图移动。即将废弃，请使用 cover-view。
     */
    interface MapControl {
        /**
         * 控件id。
         * 在控件点击事件回调会返回此id。
         */
        id?: Number;

        /**
         * 控件在地图的位置。
         * 控件相对地图位置。
         */
        position: ControlPosition;

        /**
         * 显示的图标。
         * 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径。
         */
        iconPath: string;

        /**
         * 是否可点击。默认不可点击。
         * 默认值：false
         */
        clickable?: boolean;
    }

    interface ControlPosition {
        /**
         * 距离地图的左边界多远。
         * 默认为0。
         */
        left?: Number;

        /**
         * 距离地图的上边界多远。
         * 默认为0
         */
        top?: number;

        /**
         * 控件宽度。
         * 默认为图片宽度。
         */
        width?: number;

        /**
         * 控件高度。
         * 默认为图片高度。
         */
        height?: number;
    }

    interface MapPoint {
        latitude: number;
        longitude: number;
    }

    /**
     * 画布。该组件是原生组件，使用时请注意相关限制。
     * 相关api：wx.createCanvasContext。
     *
     * 注意：
     *
     * - canvas 标签默认宽度300px、高度225px
     * - 同一页面中的 canvas-id 不可重复，如果使用一个已经出现过的 canvas-id，该 canvas 标签对应的画布将被隐藏并不再正常工作
     * - bug: 避免设置过大的宽高，在安卓下会有crash的问题
     */
    interface CanvasElement {
        /**
         * canvas 组件的唯一标识符
         */
        canvasId: string;

        /**
         * 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新。
         * 默认值：false
         */
        disableScroll?: boolean;

        /**
         * 手指触摸动作开始。
         */
        bindtouchstart?: EventHandle;

        /**
         * 手指触摸后移动。
         */
        bindtouchmove?: EventHandle;

        /**
         * 手指触摸动作结束。
         */
        bindtouchend?: EventHandle;

        /**
         * 手指触摸动作被打断，如来电提醒，弹窗。
         */
        bindtouchcancel?: EventHandle;

        /**
         * 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动。
         */
        bindlongtap?: EventHandle;

        /**
         * 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}
         */
        binderror?: EventHandle;
    }

    /**
     * 用于展示微信开放的数据。
     * 基础库 1.4.0 开始支持，低版本需做兼容处理。
     */
    interface OpenDataElement {
        /**
         * 开放数据类型。
         *
         * - groupName: 拉取群名称；最低版本 1.4.0
         * - userNickName: 用户昵称；最低版本 1.9.90
         * - userAvatarUrl: 用户头像；最低版本 1.9.90
         * - userGender: 用户性别；最低版本 1.9.90
         * - userCity: 用户所在城市；最低版本 1.9.90
         * - userProvince: 用户所在省份；最低版本 1.9.90
         * - userCountry: 用户所在国家；最低版本 1.9.90
         * - userLanguage: 用户的语言；最低版本 1.9.90
         */
        type:
            | "groupName"
            | "userNickName"
            | "userAvatarUrl"
            | "userGender"
            | "userCity"
            | "userProvince"
            | "userCountry"
            | "userLanguage";

        /**
         * 当 type="groupName" 时生效, 群id。
         */
        openGid?: string;

        /**
         * 当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW。
         * 默认值：en
         */
        lang?: string;
    }

    /**
     * 基础库 1.6.4 开始支持，低版本需做兼容处理。
     * web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。个人类型与海外类型的小程序暂不支持使用。
     * 客户端 6.7.2 版本开始，navigationStyle: custom 对 <web-view> 组件无效。
     *
     * ## 相关接口 1
     * <web-view/>网页中可使用JSSDK 1.3.2提供的接口返回小程序页面。 支持的接口有：
     *
     * | 接口名  | 说明 | 最低版本 |
     * |--------|-----|---------|
     * | wx.miniProgram.navigateTo    | 参数与小程序接口一致 | 1.6.4 |
     * | wx.miniProgram.navigateBack  | 参数与小程序接口一致 | 1.6.4 |
     * | wx.miniProgram.switchTab     | 参数与小程序接口一致 | 1.6.5 |
     * | wx.miniProgram.reLaunch      | 参数与小程序接口一致 | 1.6.5 |
     * | wx.miniProgram.redirectTo    | 参数与小程序接口一致 | 1.6.5 |
     * | wx.miniProgram.postMessage   | 向小程序发送消息    | 1.7.1 |
     * | wx.miniProgram.getEnv        | 获取当前环境        | 1.7.1 |
     *
     * ## 相关接口 2
     * <web-view/>网页中仅支持以下JSSDK接口：
     *
     * | 接口模块  | 接口说明 | 具体接口 |
     * |----------|--------|---------|
     * | 判断客户端是否支持js  |  | checkJSApi |
     * | 图像接口    | 拍照或上传 | chooseImage |
     * |           | 预览图片  | previewImage |
     * |           | 上传图片  | uploadImage |
     * |           | 下载图片  | downloadImage |
     * |           | 获取本地图片  | getLocalImgData |
     * | 音频接口   | 开始录音 | startRecord |
     * |           | 停止录音  | stopRecord |
     * |           | 监听录音自动停止  | onVoiceRecordEnd |
     * |           | 播放语音  | playVoice |
     * |           | 暂停播放  | pauseVoice |
     * |           | 停止播放  | stopVoice |
     * |           | 监听语音播放完毕  | onVoicePlayEnd |
     * |           | 上传接口  | uploadVoice |
     * |           | 下载接口  | downloadVoice |
     * | 智能接口   | 识别音频 | translateVoice |
     * | 设备信息   | 获取网络状态 | getNetworkType |
     * | 地理位置   | 使用内置地图 | getLocation |
     * |           | 获取地理位置  | openLocation |
     * | 摇一摇周边  | 开启ibeacon | startSearchBeacons |
     * |           | 关闭ibeacon  | stopSearchBeacons |
     * |           | 监听ibeacon  | onSearchBeacons |
     * | 微信扫一扫  | 调起微信扫一扫 | scanQRCode |
     * | 微信卡券   | 拉取使用卡券列表 | chooseCard |
     * |           | 批量添加卡券接口  | addCard |
     * |           | 查看微信卡包的卡券  | openCard |
     * | 长按识别   | 小程序圆形码        | 无 |
     *
     * ## 相关接口 3
     *
     * 用户分享时可获取当前<web-view/>的URL，即在onShareAppMessage回调中返回webViewUrl参数。
     *
     * ## 相关接口 4
     *
     * 在网页内可通过window.__wxjs_environment变量判断是否在小程序环境，建议在WeixinJSBridgeReady回调中使用，也可以使用JSSDK 1.3.2提供的getEnv接口。
     */
    interface WebViewElement {
        /**
         * webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。
         */
        src?: string;

        /**
         * 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }
         */
        bindmessage?: EventHandle;
    }

    /**
     * 广告。目前暂时以邀请制开放申请，请留意后续模板消息的通知。
     * 基础库 1.9.94 开始支持，低版本需做兼容处理。
     * @since 1.9.94
     */
    interface AdElement {
        /**
         * 广告单元id，可在小程序管理后台的流量主模块新建。
         */
        unitId?: string;

        /**
         * 广告加载成功的回调
         * @since 2.2.1
         */

        bindload?: EventHandle;

        /**
         * 当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因，事件对象event.detail = {errCode: 1002}
         * @since 2.2.1
         */
        binderror?: EventHandle;
    }
}

declare global {
    namespace JSX {
        interface ElementClass {}

        interface IntrinsicClassAttributes<T>
            extends wxml.IntrinsicClassAttributes<T> {}

        interface IntrinsicAttributes extends wxml.IntrinsicAttributes {}

        interface IntrinsicElements {
            block: wxml.BlockElement;

            view: wxml.ViewElement;

            "scroll-view": wxml.ScrollViewElement;

            swiper: wxml.SwiperElement;

            "swiper-item": wxml.SwiperItemElement;

            "movable-view": wxml.MovableViewElement;

            "movable-area": wxml.MovableAreaElement;

            "cover-view": wxml.CoverViewElement;

            "cover-image": wxml.CoverImageElement;

            icon: wxml.IconElement;

            text: wxml.TextElement;

            "rich-text": wxml.RichTextElement;

            progress: wxml.ProgressElement;

            button: wxml.ButtonElement;

            "checkbox-group": wxml.CheckboxGroupElement;

            checkbox: wxml.CheckboxElement;

            form: wxml.FormElement;

            input: wxml.InputElement;

            label: wxml.LabelElement;

            picker: wxml.PickerElement;

            "picker-view": wxml.PickerViewElement;

            "picker-view-column": wxml.PickerViewColumnElement;

            "radio-group": wxml.RadioGroupElement;

            radio: wxml.RadioElement;

            slider: wxml.SliderElement;

            switch: wxml.SwitchElement;

            textarea: wxml.TextareaElement;

            navigator: wxml.NavigatorElement;

            "functional-page-navigator": wxml.FunctionalPageNavigatorElement;

            audio: wxml.AudioElement;

            image: wxml.ImageElement;

            video: wxml.VideoElement;

            camera: wxml.CameraElement;

            "live-player": wxml.LivePlayerElement;

            "live-pusher": wxml.LivePusherElement;

            map: wxml.MapElement;

            canvas: wxml.CanvasElement;

            "open-data": wxml.OpenDataElement;

            "web-view": wxml.WebViewElement;

            ad: wxml.AdElement;
        }
    }
}
