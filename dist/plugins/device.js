import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para combinar plugins `Device` y `Platform` de `Cordova` o `Capacitor`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/device}
 *
 */
let DevicePlugin = class DevicePlugin {
    constructor(plt) {
        this.plt = plt;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        this.isReady = false;
        console.log(this.constructor.name, this.debug);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
        this.plt.ready().then(() => {
            this.getInfo().then(info => {
                this.isReady = true;
                this.info = info;
            });
        });
    }
    // ---------------------------------------------------------------------------------------------------
    //  Plugin wrapper
    // ---------------------------------------------------------------------------------------------------
    /** Devuelve un identificador único para el dispositivo.
     * DevicePage getId: IOS {"uuid":"1DC2F7A3-7D67-4759-A7F5-68E03CB1A8C9"}
     * DevicePage getId: ANDROID {"uuid":"c2e4f48bfdad6c7d"}
     * DevicePage getId: ELECTRON MAC {"uuid":"a66c1435-e575-48b1-a527-450e6068b1aa"}
     * DevicePage getId: ELECTRON WINDOWS {"uuid":"787026d3-7d97-49c5-8da4-6795f93ca109"}
     */
    getId() {
        return Device.getId();
    }
    /** Devuelve información sobre el dispositivo/sistema operativo/plataforma subyacente.
     * DevicePage getInfo:
     *
     * IOS
     * {
     *  "platform":"ios",
     *  "model":"iPhone",
     *  "name":"iPhone X",
     *  "memUsed":72318976,
     *  "isVirtual":false,
     *  "manufacturer":"Apple",
     *  "realDiskFree":46098519144,
     *  "realDiskTotal":63883563008,
     *  "diskFree":39898214400,
     *  "diskTotal":63883563008,
     *  "webViewVersion":"15.4.1",
     *  "operatingSystem":"ios",
     *  "osVersion":"15.4.1"
     * },
     *
     * ANDROID
     * {
     *  "platform":"android",
     *  "model":"SM-G970F",
     *  "name":"Galaxy S10e",
     *  "memUsed":7443664,
     *  "isVirtual":false,
     *  "manufacturer":"samsung",
     *  "realDiskFree":110057353216,
     *  "realDiskTotal":118053482496,
     *  "diskFree":148787200,
     *  "diskTotal":5790150656,
     *  "webViewVersion":"100.0.4896.127"
     *  "operatingSystem":"android",
     *  "osVersion":"12",
     * }
     *
     * ELECTRON MAC
     * {
     *  "model":"Macintosh",
     *  "platform":"web",
     *  "operatingSystem":"mac",
     *  "osVersion":"10.15.7",
     *  "manufacturer":"Google Inc.",
     *  "isVirtual":false,
     *  "webViewVersion":"93.0.4577.82"
     * }
     *
     * ELECTRON WINDOWS
     * {
     *  "model":"Windows NT 10.0",
     *  "platform":"web",
     *  "operatingSystem":"windows",
     *  "osVersion":"Windows NT 10.0; Win64; x64",
     *  "manufacturer":"Google Inc.",
     *  "isVirtual":false,
     *  "webViewVersion":"93.0.4577.82"
     * }
     */
    getInfo() {
        return new Promise((resolve, reject) => {
            if (this.isReady) {
                resolve(this.info);
            }
            else {
                this.plt.ready().then(() => {
                    // Devolvemos la info del dispositivo.
                    if (this.info) {
                        resolve(this.info);
                    }
                    Device.getId().then(uuid => {
                        Device.getInfo().then(info => {
                            this.isReady = true;
                            this.info = info;
                            this.info.uuid = uuid.uuid;
                            resolve(info);
                        }).catch(error => reject(error));
                    });
                }).catch(error => reject(error));
            }
        });
    }
    /** Devolver información sobre la batería.
     * DevicePage getBatteryInfo: IOS {"batteryLevel":1,"isCharging":true}
     * DevicePage getBatteryInfo: ANDROID {"batteryLevel":1,"isCharging":true}
     * DevicePage getBatteryInfo: ELECTRON {"batteryLevel":1,"isCharging":true}
     */
    getBatteryInfo() {
        return Device.getBatteryInfo();
    }
    /** Obtenga el código de configuración regional del idioma actual del dispositivo.
     * DevicePage getLanguageCode: IOS {"value":"ca"}
     * DevicePage getLanguageCode: ANDROID {"value":"es"}
     * DevicePage getLanguageCode: ELECTRON {"value":"es"}
     */
    getLanguageCode() {
        return Device.getLanguageCode();
    }
    // ---------------------------------------------------------------------------------------------------
    //  Additional functionality
    // ---------------------------------------------------------------------------------------------------
    /**
     * Returns a promise when the platform is ready and native functionality can be called.
     * If the app is running from within a web browser, then the promise will resolve when the DOM is ready.
     * When the app is running from an application engine such as Cordova, then the promise will resolve when Cordova triggers the deviceready event.
     *
     * **Native functionality available immediately**
     * When using Cordova, you need to wait until the device is ready before making calls to native functionality (e.g. by using platform.ready()).
     * Capacitor will export JavaScript on app boot so that this is no longer required.
     */
    ready() {
        return new Promise((resolve, reject) => {
            if (this.isReady) {
                resolve(this.info);
            }
            else {
                this.plt.ready().then(() => {
                    // Devolvemos la info del dispositivo.
                    if (this.info) {
                        resolve(this.info);
                    }
                    this.getInfo().then(info => {
                        this.isReady = true;
                        this.info = info;
                        resolve(info);
                    }).catch(error => reject(error));
                }).catch(error => reject(error));
            }
        });
    }
    /** Comprueba la plataforma del dispositivo. */
    is(platform) {
        var _a;
        return ((_a = this.info) === null || _a === void 0 ? void 0 : _a.platform) === platform;
    }
    /** Comprueba si el dispositivo es de la plataforma indicada y además no es virtual. */
    isReal(platform) {
        return !this.isVirtual && this.is(platform);
    }
    /** Obtiene la plataforma del dispositivo. */
    // get platform(): DeviceInfo['platform'] { return this.electronService.isElectronApp ? 'electron' : this.info?.platform; }
    get platform() { var _a; return (_a = this.info) === null || _a === void 0 ? void 0 : _a.platform; }
    /** Devuelve el sistema operativo del dispositivo. */
    get operatingSystem() { var _a; return (_a = this.info) === null || _a === void 0 ? void 0 : _a.operatingSystem; }
    /** Indica si el dispositivo está virtualizado. */
    get isVirtual() { var _a; return (_a = this.info) === null || _a === void 0 ? void 0 : _a.isVirtual; }
    /** Indica si el dispositivo es un teléfono `ios` o `android` no virtualizado. */
    get isRealPhone() { var _a, _b; return !this.isVirtual && (((_a = this.info) === null || _a === void 0 ? void 0 : _a.platform) === 'ios' || ((_b = this.info) === null || _b === void 0 ? void 0 : _b.platform) === 'android'); }
    /** Indica si la plataforma del dispositiu és 'iOS'. */
    get isIos() { var _a; return ((_a = this.info) === null || _a === void 0 ? void 0 : _a.platform) === 'ios'; }
    /** Indica si la plataforma del dispositiu és 'iOS'. */
    get isAndroid() { var _a; return ((_a = this.info) === null || _a === void 0 ? void 0 : _a.platform) === 'android'; }
    /** Indica si la plataforma del dispositiu és 'electron'. */
    // get isElectron(): boolean { return this.info?.platform === 'electron' || this.info?.operatingSystem === 'windows' || this.info?.operatingSystem === 'mac' || this.info?.operatingSystem === 'linux'; }
    get isElectron() { return !!window.navigator.userAgent.match(/Electron/); }
    /** Indica si la plataforma del dispositiu és 'windows'. */
    get isWindows() { var _a; return ((_a = this.info) === null || _a === void 0 ? void 0 : _a.operatingSystem) === 'windows'; }
    /** Indica si la plataforma del dispositiu és 'mac'. */
    get isMac() { var _a; return ((_a = this.info) === null || _a === void 0 ? void 0 : _a.operatingSystem) === 'mac'; }
};
DevicePlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DevicePlugin);
export { DevicePlugin };
//# sourceMappingURL=device.js.map