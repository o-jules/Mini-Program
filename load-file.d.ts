
/**
 * wx.uploadFile 文件上传请求对象
 */
export interface UploadFileOption {

    /**
     * 开发者服务器 url
     */
    url: string;

    /**
     * 要上传文件资源的路径要上传文件资源的路径
     */
    filePath: string;

    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    name: string;

    /**
     * HTTP 请求 Header, header 中不能设置 Referer
     */
    header?: object;

    /**
     *HTTP 请求中其他额外的 form data
     */
    formData?: object;

    /**
     * 接口调用成功的回调函数
     */
    success?: (response: FileResponse) => void;

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
 * wx.uploadFile 上传文件的返回值（其包含可使用的方法）
 */
export interface UploadTask {
    /**
     * 监听上传进度变化
     * @since v1.4.0
     */
    readonly onProgressUpdate: (callback: (p: ProgressUpdateOption) => void) => void;

    /**
     * 中断上传任务
     * @since v1.4.0
     */
    readonly abort: () => void;
}

/**
 * 下载文件的参数
 * @interface
 */
export interface DownloadFileOption {

    /**
     * 下载资源的 url
     */
    url: string;

    /**
     * HTTP 请求 Header，header 中不能设置 Referer
     */
    header?: object;

    /**
     *      下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     */
    success?: (reponse: FileResponse) => void;

    /**
     *   接口调用失败的回调函数
     */
    fail?: () => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
}

/**
 * wx.downloadFile 下载文件的返回值（其包含可使用的方法）
 */
export interface DownloadTask {
    /**
     * 监听上传进度变化
     * @since v1.4.0
     */
    readonly onProgressUpdate: (callback: (p: ProgressUpdateOption) => void) => void;

    /**
     * 中断上传任务
     * @since v1.4.0
     */
    readonly abort: () => void;
}

/**
 * onProgressUpdate 返回参数说明
 */
interface ProgressUpdateOption {
    /**
     * 上传进度百分比
     */
    readonly progress: number;

    /**
     *    已经上传的数据长度，单位 Bytes
     */
    readonly totalBytesSent: number;

    /**
     * 预期需要上传的数据总长度，单位 Bytes
     */
    readonly totalBytesExpectedToSend: number;
}

/**
 * 文件传输成功后的返回数据
 * @interface
 */
interface FileResponse {
    /**
     * 开发者服务器返回的数据
     */
    readonly data: string;

    /**
     * 开发者服务器返回的 HTTP 状态码
     */
    readonly statusCode: number;
}
