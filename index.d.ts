import { RequestOption, RequestTask } from './request';
import { UploadFileOption, UploadTask, DownloadTask, DownloadFileOption } from './load-file';
import { ConnectSocketOption, SocketTask } from './websocket';
import { StartRecordOption, RecorderManager } from './recorder';
import { MakePhoneCallOption } from './phone-call';
import { SetClipboardOption, GetClipboardOption } from './clipboard';
import { SaveFileOption, GetFileInfoOption, GetSavedFileListOption, GetSavedFileInfoOption, RemoveSavedFileOption, OpenDocumentOption } from './file';
import { SetStorageOption, GetStorageOption, GetStorageInfoOption, StorageInfo, RemoveStorageOption } from './storage';
import { SocketWorker } from './worker';
import { UpdateManager } from './update-manager';
import { ChooseImageOption } from './images';

declare global {
    /**
     * 全局的 wx 对象
     * @constant
     * @global
     */
    var wx: (
        Network & ImageOperation & Recorder & PhoneCall & Clipboard &
        FileOperation & Storage & Worker & Update
    );

}

/// <h1> 网络请求
interface Network {

    /**
     * 发起网络请求
     *
     * @param {RequestOption} option
     * @return {RequestTask}
     */
    request(option: RequestOption): RequestTask;

    /**
     * 上传文件
     * @param {UploadFileOption} option - 上传文件所需的参数
     * @return {UploadTask}
     */
    uploadFile(option: UploadFileOption): UploadTask;

    /**
     * 下载文件
     * @param {DownloadFileOption} option - 下载文件所需的参数
     * @return {DownloadTask}
     */
    downloadFile(option: DownloadFileOption): DownloadTask;

    /**
     * 创建一个 WebSocket 连接。
     * @param {ConnectSocketOption} option - 创建 WebSocket 所需要的参数
     * @return {SocketTask}
     */
    connectSocket(option: ConnectSocketOption): SocketTask;

    /**
     * 监听WebSocket连接打开事件。
     * @deprecated
     */
    onSocketOpen: SocketTask["onOpen"];

    /**
     * 监听WebSocket错误。
     * @deprecated
     */
    onSocketError: SocketTask["onError"];

    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
     * @deprecated
     */
    sendSocketMessage: SocketTask["send"];

    /**
     * 监听WebSocket接受到服务器的消息事件。
     * @deprecated
     */
    onSocketMessage: SocketTask["onMessage"];

    /**
     * 关闭 WebSocket 连接。
     * @deprecated
     */
    closeSocket: SocketTask["close"];
}

interface ImageOperation {
    chooseImage: (option: ChooseImageOption) => void;
}

/// <h1>录音管理
interface Recorder {
    /**
     * 开始录音
     * @param {StartRecordOption} option - 开始录音所需的参数
     */
    startRecord(option: StartRecordOption): void;

    /**
     * 停止录音
     */
    stopRecord(): void;

    /**
     * 获取全局唯一的录音管理器
     * @return {RecorderManager}
     */
    getRecorderManager(): RecorderManager;
}

/// <h1>电话
interface PhoneCall {
    /**
     * 拨打电话
     */
    makePhoneCall(option: MakePhoneCallOption): void;
}


/// <h1>剪贴板
interface Clipboard {
    /**
     * 复制文字到剪贴板
     */
    setClipboardData(option: SetClipboardOption): void;

    /**
     * 获取系统剪贴板的内容
     */
    getClipboardData(option: GetClipboardOption): void;
}

/// <h1>文件操作
interface FileOperation {
    /**
     * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
     * @param {SaveFileOption} option
     */
    saveFile(option: SaveFileOption): void;

    /**
     * 获取文件信息
     * @since v1.4.0
     * @param option
     */
    getFileInfo(option: GetFileInfoOption): void;

    /**
     * 获取本地已保存的文件列表
     * @param option
     */
    getSavedFileList(option: GetSavedFileListOption): void;

    /**
     * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
     * @param option
     */
    getSavedFileInfo(option: GetSavedFileInfoOption): void;

    /**
     * 删除本地存储的文件
     * @param option
     */
    removeSavedFile(option: RemoveSavedFileOption): void;

    /**
     * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
     * @param option
     */
    openDocument(option: OpenDocumentOption): void;
}

/// <h1>缓存
/**
 * 每个微信小程序都可以有自己的本地缓存，可以通过 wx.setStorage（wx.setStorageSync）、wx.getStorage（wx.getStorageSync）、
 * wx.clearStorage（wx.clearStorageSync）可以对本地缓存进行设置、获取和清理。
 * 同一个微信用户，同一个小程序 storage 上限为 10MB。localStorage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。
 *
 * 注意： 如果用户储存空间不足，我们会清空最近最久未使用的小程序的本地缓存。我们不建议将关键信息全部存在 localStorage，以防储存空间不足或用户换设备的情况。
 */
interface Storage {
    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
     * @param option
     */
    setStorage(option: SetStorageOption): void;

    /**
     * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。如果错误，会抛出异常。
     * @param key
     * @param data
     *
     * @throws
     */
    setStorageSync(key: string, data: string | object): void;

    /**
     * 从本地缓存中异步获取指定 key 对应的内容。
     * @param option
     */
    getStorage(option: GetStorageOption): void;

    /**
     * 从本地缓存中同步获取指定 key 对应的内容。如果出错，则抛出异常。
     * @param key - 本地缓存中的指定的 key
     *
     * @throws
     */
    getStorageSync(key: string): string;

    /**
     * 异步获取当前storage的相关信息
     * @param option
     */
    getStorageInfo(option: GetStorageInfoOption): void;

    /**
     * 同步获取当前storage的相关信息。如果失败则抛出异常。
     *
     * @throws
     */
    getStorageInfoSync(): StorageInfo;

    /**
     * 从本地缓存中异步移除指定 key。
     * @param option
     */
    removeStorage(option: RemoveStorageOption): void;

    /**
     * 从本地缓存中同步移除指定 key 。
     * @param key - 本地缓存中的指定的 key
     */
    removeStorageSync(key: string): void;

    /**
     * 清理本地数据缓存。
     */
    clearStorage(): void;

    /**
     * 同步清理本地数据缓存
     */
    clearStorageSync(): void;
}

// <h1>多线程
interface Worker {
    /**
     * 创建一个 Worker 线程，并返回 Worker 实例，目前限制最多只能创建一个 Worker，创建下一个 Worker 前请调用 Worker.terminate。
     * @param {string} scriptPath 为 worker 的入口文件路径，需填写绝对路径。
     * @return {Worker}
     */
    createWorker(scriptPath: string): SocketWorker;
}

// <h1>更新管理
interface Update {
    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。
     * @since v1.9.90
     */
    getUpdateManager(): UpdateManager;
}
