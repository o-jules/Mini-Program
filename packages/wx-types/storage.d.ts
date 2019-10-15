
/**
 * 设置缓存的参数
 */
export interface SetStorageOption {

    /**
     * 本地缓存中的指定的 key
     */
    key: string;

    /**
     * 需要存储的内容
     */
    data: any;

    /**
     * 接口调用成功的回调函数
     */
    success?: () => void;

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
 * 设置缓存的参数
 */
export interface GetStorageOption {

    /**
     * 本地缓存中的指定的 key
     */
    key: string;

    /**
     * 接口调用成功的回调函数,res = {data: key对应的内容}
     */
    success?: (res: {
        data: string
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
 * 异步获取当前storage的相关信息
 */
export interface GetStorageInfoOption {
    /**
     * 接口调用成功的回调函数,res = {data: key对应的内容}
     */
    success?: (res: StorageInfo) => void;

    /**
     * 接口调用失败的回调函数
     */
    fail?: () => void;

    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
}

export interface StorageInfo {
    /**
     * 当前storage中所有的key
     */
    keys: Array<string>;

    /**
     * 当前占用的空间大小, 单位kb
     */
    currentSize: number;

    /**
     * 限制的空间大小，单位kb
     */
    limitSize: number;
}

/**
 * 从本地缓存中异步移除指定 key。
 */
export interface RemoveStorageOption {

    /**
     * 本地缓存中的指定的 key
     */
    key: string;

    /**
     * 接口调用成功的回调函数,res = {data: key对应的内容}
     */
    success?: (res: {
        data: string
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
