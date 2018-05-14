
/**
 * Worker 对象
 * @interface
 */
interface Worker {
    /**
     * 向 Worker 线程发送的消息。
     */
    postMessage(message: object): void

    /**
     * 监听 Worker 线程向当前线程发送的消息
     */
    onMessage(callback: (message: object) => void): void

    /**
     * 结束当前 Worker 线程，仅限在主线程 Worker 实例上调用。
     */
    terminate(): void
}
