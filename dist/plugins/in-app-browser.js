import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CapacitorElectronMetacodi } from '@metacodi/capacitor-electron';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `InAppBrowserPlugin`.
 *
 * **Cordova**
 *
 * ```sell
 * ionic cordova plugin add cordova-plugin-inappbrowser
 * npm install @ionic-native/in-app-browser
 * ```
 * Usage
 * ```typescript
 * import { InAppBrowserPlugin } from 'src/core-native';
 *
 * constructor(public iab: InAppBrowserPlugin){}
 * ```
 */
let InAppBrowserPlugin = class InAppBrowserPlugin {
    constructor(device, iab) {
        this.device = device;
        this.iab = iab;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
    /**
     * Open a new Window
     *
     * parameters:
     *
     * @param options.url : Url to navigate
     * @param options.optionsWindow
     *
     *  InAppBrowserOptions (mobile) {@link https://github.com/apache/cordova-plugin-inappbrowser#cordovainappbrowseropen }
     *
     *  OR
     *
     *  BrowserWindowConstructorOptions (electron) {@link https://www.electronjs.org/docs/api/browser-window#clase-browserwindow }
     *
     * Sample Mobile
     * ```typescript
     * this.iab.openWindow({ url: 'https://domain.ext/', '_blank', optionsWindow: {
     *        location: 'no',
     *        clearcache: 'yes',
     *        toolbar: 'yes',
     *        hidenavigationbuttons: 'yes',
     *        closebuttoncolor: '#3880ff',
     *        toolbarcolor: '#ffffff',
     *        hideurlbar: 'no',
     *        closebuttoncaption: '< ' + this.translate.instant('buttons.back')
     *      } }).then(window => {
     *    this.iab.onStatusUpdate().subscribe(result => {
     *     // When url is change return string
     *     if (result.status === 'navigate') {
     *       console.log('onStatusUpdate => Navigate', result.url);
     *     }
     *     // If window is closed
     *     if (result.status === 'close') {
     *       console.log('onStatusUpdate => Closed');
     *     }
     *   });
     * });
     * ```
     * Sample Electron
     * ```typescript
     * this.iab.openWindow({ url: 'https://domain.ext/', optionsWindow: { width: 1000, height: 800 } }).then(window => {
     *   this.iab.onStatusUpdate().subscribe(result => {
     *     // When url is change return string
     *     if (result.status === 'navigate') {
     *       console.log('onStatusUpdate => Navigate', result.url);
     *     }
     *     // If window is closed
     *     if (result.status === 'close') {
     *       console.log('onStatusUpdate => Closed');
     *     }
     *   });
     * });
     * ```
     */
    openWindow(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => {
                if (this.isOpened) {
                    this.close();
                }
                if (this.device.isElectron) {
                    CapacitorElectronMetacodi.openWindow({ url: options.url, optionsWindow: options.optionsWindow });
                    return;
                }
                else if (this.device.isRealPhone || this.device.is('mobileweb') || this.device.info.platform === 'web') {
                    return this.browserIAP = this.iab.create(options.url, '_blank', options.optionsWindow);
                }
                else {
                    return;
                }
            });
        });
    }
    onStatusUpdate() {
        return new Observable(observer => {
            if (this.device.isRealPhone) {
                this.browserIAP.on('loadstop').subscribe((event) => {
                    this.isOpened = true;
                    observer.next({ status: 'navigate', url: event.url });
                });
                this.browserIAP.on('exit').subscribe((event) => {
                    this.isOpened = false;
                    observer.next({ status: 'close' });
                    observer.complete();
                });
            }
            else if (this.device.isElectron) {
                let currentUrl = '';
                const timerId = setInterval(() => {
                    CapacitorElectronMetacodi.getUrl().then(value => {
                        if (value.isClosed) {
                            this.isOpened = false;
                            clearInterval(timerId);
                            observer.next({ status: 'close' });
                            observer.complete();
                        }
                        else if (currentUrl !== value.url) {
                            currentUrl = value.url;
                            this.isOpened = true;
                            observer.next({ status: 'navigate', url: currentUrl });
                        }
                    });
                }, 250);
            }
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            var _a;
            if (this.isOpened) {
                if (this.device.isRealPhone) {
                    (_a = this.browserIAP) === null || _a === void 0 ? void 0 : _a.hide();
                }
                else if (this.device.isElectron) {
                    CapacitorElectronMetacodi === null || CapacitorElectronMetacodi === void 0 ? void 0 : CapacitorElectronMetacodi.closeWindow();
                }
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    }
};
InAppBrowserPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InAppBrowserPlugin);
export { InAppBrowserPlugin };
//# sourceMappingURL=in-app-browser.js.map