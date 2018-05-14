import { StartRecordOption, RecorderManager } from './record'
import { RequestOption, RequestTask } from './request'
import { MakePhoneCallOption } from './phone-call'
import { UploadFileOption, UploadTask, DownloadFileOption, DownloadTask } from './load-file'
import { SetClipboardOption, GetClipboardOption } from './clipboard'

declare const wx: {
    /// <h1> 网络请求
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
    downloadFile: (option: DownloadFileOption) => DownloadTask

    /// <h1>录音管理

    /**
     * 开始录音
     * @param {StartRecordOption} option - 开始录音所需的参数
     */
    startRecord(option: StartRecordOption): void

    /**
     * 停止录音
     */
    stopRecord: () => void

    /**
     * 获取全局唯一的录音管理器
     * @return {RecorderManager}
     */
    getRecorderManager: () => RecorderManager

    /**
     * 拨打电话
     */
    makePhoneCall(option: MakePhoneCallOption): void

    /**
     * 复制文字到剪贴板
     */
    setClipboardData(option: SetClipboardOption): void

}

/**
 * 部分文件引自：
 * https://github.com/fengwuxp/wxp_wechat_types/
 */
