declare function getApp(): MainApp;

interface UserInfo {}

declare class MainApp {

    globalData: {
        userInfo: UserInfo
    }

    getUserInfo(cb?: (info: UserInfo) => void): Nullable<UserInfo> | void;
}
