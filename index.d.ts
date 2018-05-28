import App from "./app";
import Component from "./component";
import Page from "./page";
import Event from "./event";
import Mixin from "./mixin";

export default wepy;

declare const wepy: {

    app: new (...args: Array<any>) => App;

    component: new <DATA = {}, COMPUTED = {}>() => Component<DATA, COMPUTED> & DATA;

    event: new () => Event;

    page: new <DATA = {}, COMPUTED = {}>() => Page<DATA, COMPUTED> & DATA & COMPUTED;

    mixin: new () => Mixin;

    downloadFile: (option: { url: string }) => Promise<any>;

    getFileInfo: (option: { filePath: string }) => Promise<any>;

    getUserInfo: (option: {
        lang?: string
        success?: (res) => void
    }) => Promise<any>;

    login: () => Promise<any>;

    navigateTo: (option: { url: string }) => void;

    navigateBack: () => void;

    request: (option: {
        url: string
        success: (res: any) => void
    }) => Promise<any>;

    requestPayment: (option: {
        timeStamp: string
        nonceStr: string
        package: string
        signType: string
        paySign: string
    }) => Promise<any>;

    uploadFile: (option: {
        url: string
        filePath: string
        name: string
        header?: { [key in string]: any }
        formData: FormData | { [key in string]: any }
    }) => Promise<any>;

};
