
/**
 * 拨打电话的参数
 * @interface
 */
interface MakePhoneCallOption {
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
}
