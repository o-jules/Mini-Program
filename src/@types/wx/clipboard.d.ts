
/**
 * 复制文字到剪贴板
 * @function
 */
interface SetClipboardData {
    (option: SetClipboardOption): void;
}

declare interface SetClipboardOption {
    data: any
    success: () => void
}
