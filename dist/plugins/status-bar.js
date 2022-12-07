import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `StatusBar`.
 *
 * **Cordova**
 *
 * ```typescript
 * import { StatusBar } from '@ionic-native/status-bar/ngx';
 * ```
 *
 * **Capacitor**
 *
 * - Api: https://capacitor.ionicframework.com/docs/apis/status-bar
 *
 * ```typescript
 * import { Plugins } from '@capacitor/core';
 * const { StatusBar } = Plugins;
 *
 * StatusBar.show();
 * StatusBar.hide();
 * ```
 */
let StatusBarPlugin = class StatusBarPlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
    /** iOS only. */
    addListenerStatusTap(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(() => {
                if (!this.device.isRealPhone && this.device.isIos) {
                    return Promise.resolve();
                }
                else {
                    return window.addEventListener('statusTap', callback);
                }
            });
        });
    }
    /** Show the status bar. */
    show(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return StatusBar.show(options);
                }
            });
        });
    }
    /** Hide the status bar. */
    hide(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return StatusBar.hide(options);
                }
            });
        });
    }
    /** Set the background color of the status bar. */
    setBackgroundColor(options) {
        return this.device.getInfo().then(value => {
            if (!this.device.isRealPhone) {
                return Promise.resolve();
            }
            else {
                return StatusBar.setBackgroundColor(options);
            }
        });
    }
    /** Get info about the current state of the status bar. */
    getInfo() {
        return this.device.getInfo().then(value => {
            if (!this.device.isRealPhone) {
                return Promise.resolve(undefined);
            }
            else {
                return StatusBar.getInfo();
            }
        });
    }
    /** Set whether or not the status bar should overlay the webview to allow usage of the space around a device "notch". */
    setOverlaysWebView(options) {
        return this.device.getInfo().then(value => {
            if (!this.device.isRealPhone) {
                return Promise.resolve(undefined);
            }
            else {
                return StatusBar.setOverlaysWebView(options);
            }
        });
    }
    /** Set the current style of the status bar. */
    setStyle(options) {
        return this.device.getInfo().then(value => {
            if (!this.device.isRealPhone) {
                return Promise.resolve(undefined);
            }
            else {
                return StatusBar.setStyle(options);
            }
        });
    }
    setStatusBar(mode) {
        if (this.debug) {
            console.log(this.constructor.name + '.setStatusBar()');
        }
        this.device.ready().then(() => {
            if (this.debug) {
                console.log(this.constructor.name + '.setStatusBar() => this.device.platform', this.device.platform);
            }
            if (this.device.isReal('ios')) {
                this.setStyle({ style: mode === 'light' ? Style.Light : Style.Dark });
            }
            else if (this.device.isReal('android')) {
                //  this.setStyle({ style: StatusBarStyle.Dark });
                this.setStyle({ style: mode === 'light' ? Style.Dark : Style.Light });
            }
            if (this.debug) {
                this.getInfo().then(info => { console.log(this.constructor.name + '.getInfo', JSON.stringify(info)); });
            }
        }).catch(error => {
            if (this.debug) {
                console.log(this.constructor.name + '.setStatusBar() error =>', error);
            }
        });
    }
};
StatusBarPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StatusBarPlugin);
export { StatusBarPlugin };
//# sourceMappingURL=status-bar.js.map