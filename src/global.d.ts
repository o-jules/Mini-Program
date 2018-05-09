declare function getApp(): App;

interface UserInfo {}

declare class App {

    globalData: {
        userInfo: UserInfo
    }

    getUserInfo(cb?: (info: UserInfo) => void): Nullable<UserInfo> | void;
}
