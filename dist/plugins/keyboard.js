import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `Keyboard`.
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/keyboard}
 */
let KeyboardPlugin = class KeyboardPlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
        this.device.ready().then(() => {
            // Actualizamos los teclados de los dispositivos móviles.
            if (this.device.isRealPhone) {
                Keyboard.setAccessoryBarVisible({ isVisible: true });
            }
        });
    }
    ngOnDestroy() {
        this.device.getInfo().then(value => {
            if (!this.device.isRealPhone) {
                return;
            }
            else {
                Keyboard.removeAllListeners();
            }
        });
    }
    addListenerWillShow(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.addListener('keyboardWillShow', callback);
                }
            });
        });
    }
    addListenerDidShow(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.addListener('keyboardDidShow', callback);
                }
            });
        });
    }
    addListenerWillHide(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.addListener('keyboardWillHide', callback);
                }
            });
        });
    }
    addListenerDidHide(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.addListener('keyboardDidHide', callback);
                }
            });
        });
    }
    /** Set whether the accessory bar should be visible on the keyboard. We recommend disabling the accessory bar for short forms (login, signup, etc.) to provide a cleaner UI */
    setAccessoryBarVisible(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.setAccessoryBarVisible(options);
                }
            });
        });
    }
    /** Programmatically set the keyboard style. */
    setStyle(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.setStyle(options);
                }
            });
        });
    }
    /** Programmatically set the resize mode. */
    setResizeMode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.setResizeMode(options);
                }
            });
        });
    }
    /** Programmatically enable or disable the WebView scroll. */
    setScroll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.setScroll(options);
                }
            });
        });
    }
    /** Show the keyboard. */
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.show();
                }
            });
        });
    }
    /** Hide the keyboard. */
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return Promise.resolve(undefined);
                }
                else {
                    return Keyboard.hide();
                }
            });
        });
    }
};
KeyboardPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], KeyboardPlugin);
export { KeyboardPlugin };
//# sourceMappingURL=keyboard.js.map