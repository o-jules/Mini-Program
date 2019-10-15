/**
 * 版本更新管理器
 * @interface
 * @since v1.9.90
 */
export interface UpdateManager {
    /**
     * 当向微信后台请求完新版本信息，会进行回调
     * @param callback
     */
    onCheckForUpadate(callback: (hasUpdate: boolean) => void): void;

    /**
     * 当新版本下载完成，会进行回调
     * @param callback
     */
    onUpdateReady(callback: () => void): void;

    /**
     * 当新版本下载失败，会进行回调
     * @param callback
     */
    onUpdateFailed(callback: () => void): void;

    /**
     * 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启
     */
    applyUpdate(): void;
}
