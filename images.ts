
/**
 * 选择图片的参数
 */
export interface ChooseImageOption {
    /**
     * 最多可以选择的图片张数，默认9
     */
    count?: number;

    /**
     * original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: Array<string>;

    /**
     * album 从相册选图，camera 使用相机，默认二者都有
     */
    sourceType?: Array<string>;

    /**
     * 成功则返回图片的本地文件路径列表 tempFilePaths
     */
    success: (res: {
        /**
         * 图片的本地文件路径列表
         */
        tempFilePaths: Array<string>;

        /**
         * 图片的本地文件列表，每一项是一个 File 对象
         * @since v1.2.0
         */
        tempFiles: Array<{
            /**
             * 本地文件路径
             */
            readonly path: string;

            /**
             * 本地文件大小，单位：B
             */
            readonly size: number;
        }>
    }) => void;

    fail?: () => void;

    complete?: () => void;
}

/**
 * 预览图片的参数
 */
export interface PreviewImageOption {
    /**
     * 当前显示图片的链接，不填则默认为 urls 的第一张
     */
    current?: string;

    /**
     * 需要预览的图片链接列表
     */
    urls: Array<string>;

    /**
     * 接口调用成功的回调函数
     */
    success?: () => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: () => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
}

/**
 * 获取图片信息的参数
 */
export interface GetImageInfoOption {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    src: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
        /**
         * 图片宽度，单位px
         */
        readonly width: number;

        /**
         * 图片高度，单位px
         */
        readonly height: number;

        /**
         * 返回图片的本地路径
         */
        readonly path: string;

        /**
         * @since v1.9.90
         * 返回图片的方向，有效值见下表:
         * up 默认
         * down 180度旋转
         * left 逆时针旋转90度
         * right 顺时针旋转90度
         * up-mirrored 同up，但水平翻转
         * down-mirrored 同down，但水平翻转
         * left-mirrored 同left，但垂直翻转
         * right-mirrored 同right，但垂直翻转
         */
        readonly orientation: string;

        /**
         * 返回图片的格式
         * @since 1.9.90
         */
        readonly type: string;
    }) => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: () => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
}

export interface SaveImageOption {
    /**
     * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
     */
    filePath: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
        /**
         * 调用结果
         */
        readonly errMsg: string;
    }) => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: () => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
}
