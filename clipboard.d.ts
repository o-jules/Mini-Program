
/**
 * 复制文字到剪贴板的参数
 */
export interface SetClipboardOption {
    data: string;

    /**
     * 接口调用成功的回调函数
     */
    success?(res: { data: string }): void;

    /**
     * 接口调用失败的回调函数
     */
    fail?(): void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
}

/**
 * 获取系统剪贴板内容
 */
export interface GetClipboardOption {
    /**
     * 接口调用成功的回调函数
     */
    success?(res: { data: string }): void;

    /**
     * 接口调用失败的回调函数
     */
    fail?(): void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
}
