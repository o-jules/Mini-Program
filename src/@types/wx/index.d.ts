
declare const wx: (
    Network & Recorder & PhoneCall & Clipboard & Worker
)

/// <h1> 网络请求
interface Network {

    /**
     * 发起网络请求
     *
     * @param {RequestOption} option
     * @return {RequestTask}
     */
    request(option: RequestOption): RequestTask

    /**
     * 上传文件
     * @param {UploadFileOption} option - 上传文件所需的参数
     * @return {UploadTask}
     */
    uploadFile(option: UploadFileOption): UploadTask

    /**
     * 下载文件
     * @param {DownloadFileOption} option - 下载文件所需的参数
     * @return {DownloadTask}
     */
    downloadFile(option: DownloadFileOption): DownloadTask

    /**
     * 创建一个 WebSocket 连接。
     * @param {ConnectSocketOption} option - 创建 WebSocket 所需要的参数
     * @return {SocketTask}
     */
    connectSocket(option: ConnectSocketOption): SocketTask

    /**
     * 监听WebSocket连接打开事件。
     * @deprecated
     */
    onSocketOpen: SocketTask["onOpen"]

    /**
     * 监听WebSocket错误。
     * @deprecated
     */
    onSocketError: SocketTask["onError"]

    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
     * @deprecated
     */
    sendSocketMessage: SocketTask["send"]

    /**
     * 监听WebSocket接受到服务器的消息事件。
     * @deprecated
     */
    onSocketMessage: SocketTask["onMessage"]

    /**
     * 关闭 WebSocket 连接。
     * @deprecated
     */
    closeSocket: SocketTask["close"]

}

/// <h1>录音管理
interface Recorder {
    /**
     * 开始录音
     * @param {StartRecordOption} option - 开始录音所需的参数
     */
    startRecord(option: StartRecordOption): void

    /**
     * 停止录音
     */
    stopRecord(): void

    /**
     * 获取全局唯一的录音管理器
     * @return {RecorderManager}
     */
    getRecorderManager(): RecorderManager
}

/// <h1>电话
interface PhoneCall {
    /**
     * 拨打电话
     */
    makePhoneCall(option: MakePhoneCallOption): void
}


/// <h1>剪贴板
interface Clipboard {
    /**
     * 复制文字到剪贴板
     */
    setClipboardData(option: SetClipboardOption): void
}

// <h1>多线程
interface Worker {
    /**
     * 创建一个 Worker 线程，并返回 Worker 实例，目前限制最多只能创建一个 Worker，创建下一个 Worker 前请调用 Worker.terminate。
     * @param {string} scriptPath 为 worker 的入口文件路径，需填写绝对路径。
     * @return {Worker}
     */
    createWorker(scriptPath: string): Worker
}
