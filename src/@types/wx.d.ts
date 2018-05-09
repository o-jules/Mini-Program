
declare const wx: {
    /**
     * 拨打电话
     * @function
     */
    makePhoneCall: (option: {
        /**
         * 需要拨打的电话号码
         * @property
         */
        phoneNumber: string

        /**
         * 接口调用成功的回调
         * @property
         */
        success?: () => void

        /**
         * 接口调用失败的回调函数
         * @property
         */
        fail?: () => void

        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         * @property
         */
        complete?: () => void
    }) => void;

    setClipboardData: (option: SetClipboardOption) => void;

    uploadFile: (option: UploadFileOption) => Promise<any>;
}

declare interface SetClipboardOption {
    data: any
    success: () => void
}

declare interface UploadFileOption {
    url: string
    filePath: string
    name: string
    header?: { [key in string]: any }
    formData: { [key in string]: any }
    success: (res: any) => boolean
    fail: (res: any) => boolean
}
