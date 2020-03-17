# `wxapkg` 微信小程序应用包

`wxapkg` 是微信小程序应用包。

## 获取微信小程序安装包

步骤：
- 在 *开启Root权限*的安卓设备 上安装 微信
- 打开 微信，并打开 微信小程序
- 在 微信小程序包的存放路径 中获取 微信小程序包

安卓设备：
- 安卓手机
- 官方 AVD (Android Virutal Device)
- 第三方安卓模拟器
  * [Mumu模拟器](http://mumu.163.com/)

微信小程序包的存放路径: `/data/data/com.tencent.mm/MicroMsg/$HASH/appbrand/pkg/`

## 反编译微信小程序安装包

工具：
- [unwxapkg](https://github.com/sjatsh/unwxapkg)
- [wxappUnpacker](https://github.com/virjar/wxappUnpacker)

### unwxapkg

步骤：
- `go get github.com/sjatsh/unwxapkg`
- `cd ~/go/src/github.com/sjatsh/unwxapkg`
- `go build`
- copy your *.wxapkg file into `dest`
- `./unwxapkg -f dest/$APP_NAME.wxpkg`