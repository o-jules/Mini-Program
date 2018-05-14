
declare const wx: {
    /**
     * 网络请求
     * @function
     */
    request: WxRequest

    /**
     * 拨打电话
     * @function
     */
    makePhoneCall: MakePhoneCall;

    /**
     * 复制文字到剪贴板
     * @function
     */
    setClipboardData: SetClipboardData

    /**
     * 上传文件
     * @function
     */
    uploadFile: UploadFile

    /**
     * 上传文件
     * @function
     */
    downloadFile: DownloadFile
}

/**
 * 部分文件引自：
 * https://github.com/fengwuxp/wxp_wechat_types/
 */
