
export interface SaveFileOption {
    /**
     * 需要保存的文件的临时路径
     */
    tempFilePath: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
        /**
         * @param 文件的保存路径
         */
        readonly savedFilePath: string;
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

/**
 * @since v1.4.0
 */
export interface GetFileInfoOption {
    /**
     * 本地文件路径
     */
    filePath: string;

    /**
     * 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
     */
    digestAlgorithm?: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
        /**
         * 文件大小，单位：B
         */
        readonly size: number;

        /**
         * 按照传入的 digestAlgorithm 计算得出的的文件摘要
         */
        readonly digest: string;

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

/**
 * 获取本地已保存的文件列表
 */
export interface GetSavedFileListOption {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
        /**
         * 接口调用结果
         */
        readonly errMsg: string;

        /**
         * 文件列表
         */
        readonly fileList: Array<{
            /**
             * 文件的本地路径
             */
            readonly filePath: string;

            /**
             * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
             */
            readonly createTime: number;

            /**
             * 文件大小，单位B
             */
            readonly size: number;
        }>;

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

/**
 * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
 */
export interface GetSavedFileInfoOption {
    /**
     * 文件路径
     */
    filePath: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: {
        /**
         * 接口调用结果
         */
        readonly errMsg: string;

        /**
         * 文件大小，单位B
         */
        readonly size: number;

        /**
         * 文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数
         */
        readonly createTime: number;
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

/**
 * 删除本地存储的文件
 */
export interface RemoveSavedFileOption {
    /**
     * 需要删除的文件路径
     */
    filePath: string;

    /**
     * 接口调用成功的回调函数
     */
    success: (res: {

        /**
         * 接口调用结果
         */
        readonly errMsg: string;

        /**
         * 文件列表
         */
        readonly fileList: Array<{
            /**
             * 文件的本地路径
             */
            readonly filePath: string;

            /**
             * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
             */
            readonly createTime: number;

            /**
             * 文件大小，单位B
             */
            readonly size: number;
        }>
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

/**
 * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
 */
export interface OpenDocumentOption {
    /**
     * 文件路径，可通过 downFile 获得
     */
    filePath: string;

    /***
     * 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
     * @since v1.4.0
     */
    fileType?: string;

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
