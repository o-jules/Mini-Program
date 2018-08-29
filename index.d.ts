export = wxml;
export as namespace wxml;

declare namespace wxml {
    interface Attributes {}

    interface InstrisicClassAttributes<T> {}

    interface Element {
        class?: string;
        id?: string;
        key?: string | number;
    }

    interface EventHandle {}

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
        bindscroll?: EventHandle;
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
        indicatorDots: boolean;

        /**
         * 指示点颜色。
         * 默认值：rgba(0, 0, 0, .3)
         *
         * @since 1.1.0
         */
        indicatorColor: string;

        /**
         * 当前选中的指示点颜色。
         * 默认值：#000000
         *
         * @since 1.1.0
         */
        indicatorActiveColor: string;

        /**
         * 是否自动切换。
         * 默认值：false
         */
        autoplay: boolean;

        /**
         * 当前所在滑块的 index。
         * 默认值：0
         */
        current: number;

        /**
         * 当前所在滑块的 item-id ，不能与 current 被同时指定。
         * 默认值：	""
         * @since 1.9.0
         */
        currentItemId: string;
    
        /**
         * 自动切换时间间隔。
         * 默认值：5000
         */
        interval: number;

        /**
         * 滑动动画时长。
         * 默认值：500
         */
        duration: number;

        /**
         * 是否采用衔接滑动。
         * 默认值：false。
         */
        circular: boolean;

        /**
         * 滑动方向是否为纵向。
         * 默认值：false。
         */
        vertical: boolean;
    
        /**
         * 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值。
         * 默认值："0px"。
         * @since 1.9.0
         */
        previousMargin: string;
    
        /**
         * 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值。
         * 默认值："0px"
         * @since 1.9.0
         */
        nextMargin: string;
    
        /**
         * 同时显示的滑块数量
         * 默认值：1
         * @since 1.9.0
         */
        displayMultipleItems: number;

        /**
         * 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息。
         * 默认值：false
         * @since 1.9.0
         */
        skipHiddenItemLayout: boolean;

        /**
         * current 改变时会触发 change 事件，event.detail = {current: current, source: source}。
         * 从 1.4.0 开始，change事件返回detail中包含一个source字段，表示导致变更的原因，可能值如下：
         *   - autoplay 自动播放导致swiper变化；
         *   - touch 用户划动引起swiper变化；
         *   - 其他原因将用空字符串表示。
         */
        bindchange: EventHandle;

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
        itemId: string;
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
         * @since 1.4.0
         */
        space?: /** 中文字符空格一半大小 */

            | "ensp"
            /** 中文字符空格大小 */
            | "emsp"
            /** 根据字体设置的空格大小 */
            | "nbsp";

        /**
         * 是否解码；
         * 默认值：false
         *
         * decode可以解析的有 &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;
         * @since 1.4.0
         */
        decode?: boolean;
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
        mode?: string;

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
}

declare global {
    namespace JSX {
        interface InstrisicClassAttributes<T>
            extends wxml.InstrisicClassAttributes<T> {}

        interface InstrisicAttributes extends wxml.Attributes {}

        interface IntrinsicElements {
            block: wxml.BlockElement;

            view: wxml.ViewElement;

            "scroll-view": wxml.ScrollViewElement;

            swiper: wxml.SwiperElement;

            "swiper-item": wxml.SwiperItemElement;

            text: wxml.TextElement;

            image: wxml.ImageElement;
        }
    }
}
