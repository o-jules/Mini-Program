/**
 * 发起网络请求
 * https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
 *
 * @param {RequestOption} req
 * @return RequestTask
 */
interface WxRequest {
    (req: RequestOption): RequestTask
}

/**
 * wx.request
 */
interface RequestOption {
    /**
     * url
     */
    url: string

    /**
     * 请求的参数
     */
    data?: object | string | ArrayBuffer

    /**
     * 设置请求的 header，header 中不能设置 Referer。
     */
    header?: object

    /**
     * （需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     */
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

    /**
     * 如果设为json，会尝试对返回的数据做一次 JSON.parse
     */
    dataType?: string

    /**
     * 置响应的数据类型。
     * 默认值：text；合法值：text，arraybuffer。
     * @since 1.7.0
     */
    responseType?: 'text' | 'arraybuffer'

    /**
     * 收到开发者服务成功返回的回调函数
     */
    success?: (response: FetchResponse) => void

    /**
     * 接口调用失败的回调函数
     */
    fail?: (response: FetchResponse) => void

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (response: FetchResponse) => void
}

/**
 * wx.request 响应对象
 */
interface FetchResponse {
    /**
     * 返回的数据
     */
    readonly data?: object | string | ArrayBuffer

    /**
     * 返回的请求头
     */
    readonly header?: object

    /**
     * 返回的状态码
     */
    readonly statusCode: number
}

/**
 * wx.request 返回值
 */
interface RequestTask {

    /**
     * 中断请求任务
     */
    readonly abort: () => void
}
