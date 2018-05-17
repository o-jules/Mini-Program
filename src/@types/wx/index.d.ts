
declare const wx: (
    Network & Recorder & PhoneCall & Clipboard &
    FileOperation & Worker & Update
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

    chooseImage: (option: ChooseImageOption) => void
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

/// <h1>文件操作
interface FileOperation {
    /**
     * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
     * @param {SaveFileOption} option
     */
    saveFile(option: SaveFileOption): void

    /**
     * 获取文件信息
     * @since v1.4.0
     * @param option
     */
    getFileInfo(option: GetFileInfoOption): void

    /**
     * 获取本地已保存的文件列表
     * @param option
     */
    getSavedFileList(option: GetSavedFileListOption): void

    /**
     * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
     * @param option
     */
    getSavedFileInfo(option: GetSavedFileInfoOption): void

    /**
     * 删除本地存储的文件
     * @param option
     */
    removeSavedFile(option: RemoveSavedFileOption): void

    /**
     * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
     * @param option
     */
    openDocument(option: OpenDocumentOption): void
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

// <h1>更新管理
interface Update {
    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。
     * @since v1.9.90
     */
    getUpdateManager(): UpdateManager
}
