
declare const wx: {
    makePhoneCall: (option: PhoneCallOption) => void;

    setClipboardData: (option: SetClipboardOption) => void;

    uploadFile: (option: UploadFileOption) => Promise<any>;
}

interface PhoneCallOption {
    phoneNumber: string
}

interface SetClipboardOption {
    data: any
    success: () => void
}

interface UploadFileOption {
    url: string
    filePath: string
    name: string
    header?: { [key in string]: any }
    formData: { [key in string]: any }
    success: (res: any) => boolean
    fail: (res: any) => boolean
}

interface UserInfo {
}
