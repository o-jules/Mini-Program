
/**
 * wx.connectSocket 的参数
 */
export interface ConnectSocketOption {
    /**
     * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
     */
    url: string;

    /**
     * HTTP Header , header 中不能设置 Referer
     */
    header?: object;

    /**
     * 默认是GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: string;

    /**
     * 子协议数组
     * @since 1.4.0
     */
    protocols?: Array<string>;

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
 * SocketTask 对象
 * @since v1.7.0
 */
export interface SocketTask {
    /**
     * 通过 WebSocket 连接发送数据。
     * @param option
     */
    send(option: {
        /**
         * 需要发送的内容
         */
        data: string | ArrayBuffer;

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
    }): void;

    /**
     * 关闭 WebSocket 连接。
     * @param option
     */
    close(option: {
        /**
         * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。
         * 如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
         */
        code?: number;

        /**
         * 一个可读的字符串，表示连接被关闭的原因。
         * 这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
         */
        resaon?: string;

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
    }): void;

    /**
     * 监听 WebSocket 连接打开事件。
     * @param callback - 打开事件的回调
     */
    onOpen(callback: (res: {
        /**
         * 连接成功的 HTTP 响应 Header
         * @since v2.0.0
         */
        header: object;
    }) => void): void;

    /**
     * 监听 WebSocket 连接关闭事件。
     * @param callback - socket关闭事件的回调
     */
    onClose(callback: () => void): void;

    /**
     * 监听 WebSocket 错误。
     * @param callback - 响应错误事件的回调
     */
    onError(
        /**
         * @param errMsg - 错误信息
         */
        callback: (errMsg: string) => void
    ): void;

    /**
     * 监听WebSocket接受到服务器的消息事件。
     * @param callback - 接收数据的回调
     */
    onMessage(
        /**
         * @param data - 服务器返回的消息
         */
        callback: (data: string | ArrayBuffer) => void
    ): void;
}
