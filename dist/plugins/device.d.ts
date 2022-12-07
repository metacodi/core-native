import { Platforms } from '@ionic/core';
import { Platform } from '@ionic/angular';
import { BatteryInfo, DeviceId, DeviceInfo, GetLanguageCodeResult, OperatingSystem } from '@capacitor/device';
/**
 * Wrapper para combinar plugins `Device` y `Platform` de `Cordova` o `Capacitor`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/device}
 *
 */
export declare class DevicePlugin {
    plt: Platform;
    protected debug: boolean;
    isReady: boolean;
    info: DeviceInfo;
    constructor(plt: Platform);
    /** Devuelve un identificador único para el dispositivo.
     * DevicePage getId: IOS {"uuid":"1DC2F7A3-7D67-4759-A7F5-68E03CB1A8C9"}
     * DevicePage getId: ANDROID {"uuid":"c2e4f48bfdad6c7d"}
     * DevicePage getId: ELECTRON MAC {"uuid":"a66c1435-e575-48b1-a527-450e6068b1aa"}
     * DevicePage getId: ELECTRON WINDOWS {"uuid":"787026d3-7d97-49c5-8da4-6795f93ca109"}
     */
    getId(): Promise<DeviceId>;
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
    getInfo(): Promise<any>;
    /** Devolver información sobre la batería.
     * DevicePage getBatteryInfo: IOS {"batteryLevel":1,"isCharging":true}
     * DevicePage getBatteryInfo: ANDROID {"batteryLevel":1,"isCharging":true}
     * DevicePage getBatteryInfo: ELECTRON {"batteryLevel":1,"isCharging":true}
     */
    getBatteryInfo(): Promise<BatteryInfo>;
    /** Obtenga el código de configuración regional del idioma actual del dispositivo.
     * DevicePage getLanguageCode: IOS {"value":"ca"}
     * DevicePage getLanguageCode: ANDROID {"value":"es"}
     * DevicePage getLanguageCode: ELECTRON {"value":"es"}
     */
    getLanguageCode(): Promise<GetLanguageCodeResult>;
    /**
     * Returns a promise when the platform is ready and native functionality can be called.
     * If the app is running from within a web browser, then the promise will resolve when the DOM is ready.
     * When the app is running from an application engine such as Cordova, then the promise will resolve when Cordova triggers the deviceready event.
     *
     * **Native functionality available immediately**
     * When using Cordova, you need to wait until the device is ready before making calls to native functionality (e.g. by using platform.ready()).
     * Capacitor will export JavaScript on app boot so that this is no longer required.
     */
    ready(): Promise<DeviceInfo>;
    /** Comprueba la plataforma del dispositivo. */
    is(platform: Platforms): boolean;
    /** Comprueba si el dispositivo es de la plataforma indicada y además no es virtual. */
    isReal(platform: Platforms): boolean;
    /** Obtiene la plataforma del dispositivo. */
    get platform(): string;
    /** Devuelve el sistema operativo del dispositivo. */
    get operatingSystem(): OperatingSystem;
    /** Indica si el dispositivo está virtualizado. */
    get isVirtual(): boolean;
    /** Indica si el dispositivo es un teléfono `ios` o `android` no virtualizado. */
    get isRealPhone(): boolean;
    /** Indica si la plataforma del dispositiu és 'iOS'. */
    get isIos(): boolean;
    /** Indica si la plataforma del dispositiu és 'iOS'. */
    get isAndroid(): boolean;
    /** Indica si la plataforma del dispositiu és 'electron'. */
    get isElectron(): boolean;
    /** Indica si la plataforma del dispositiu és 'windows'. */
    get isWindows(): boolean;
    /** Indica si la plataforma del dispositiu és 'mac'. */
    get isMac(): boolean;
}
