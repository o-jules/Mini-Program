
/**
 * 录音所需的参数
 * @interface
 */
export interface StartRecordOption {

    /**
     * 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
     */
    success?: (res: {
        /**
         * 录音文件的临时路径
         */
        tempFilePath: string;
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
 * 录音管理器
 * @interface
 */
export interface RecorderManager {
    /**
     * 开始录音
     */
    start(option: StartOption): void;

    /**
     * 暂停录音
     */
    pause(): void;

    /**
     * 继续录音
     */
    resume(): void;

    /**
     * 停止录音
     */
    stop(): void;

    /**
     * 录音开始事件
     * @param callback - 录音开始的回调
     */
    onStart(callback: () => void): void;

    /**
     * 录音暂停事件
     * @param callback - 录暂停的回调
     */
    onPause(callback: () => void): void;

    /**
     * 录音停止事件，会回调文件地址
     * @param callback - 停止录音的回调
     */
    onStop(callback: (
        res: {
            /**
             * 录音文件的临时路径
             */
            tempFilePath: string;
        }) => void
    ): void;

    /**
     * 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件
     * @param callback - 录完指定帧后的回调函数
     */
    onFrameRecorded(callback: (
        res: {
            /**
             * 录音分片结果数据
             */
            frameBuffer: ArrayBuffer;

            /**
             * 当前帧是否正常录音结束前的最后一帧
             */
            isLastFrame: boolean;
        }) => void
    ): void;

    /**
     * 录音错误事件, 会回调错误信息
     * @param callback - 录音错误后的回调函数
     */
    onError(callback: (
        res: {
            /**
             * 错误信息
             */
            errMsg: string;
        }) => void
    ): void;
}

/**
 * 开始录音的参数
 * @interface
 */
interface StartOption {
    /**
     * 指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
     */
    duration?: number;

    /**
     * 采样率，有效值 8000 | 16000 | 44100;
     */
    sampleRate?: number;

    /**
     * 录音通道数，有效值 1/2
     */
    numberOfChannels?: number;

    /**
     * 编码码率，有效值见下表格
     */
    encodeBitRate?: number;

    /**
     * 音频格式，有效值 aac/mp3
     */
    format?: 'acc' | 'mp3';

    /**
     * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
     */
    frameSize?: number;
}
