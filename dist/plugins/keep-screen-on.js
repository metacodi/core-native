import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { of } from 'rxjs';
import { KeepAwake } from '@capacitor-community/keep-awake';
import { NativeConfig } from '../native-config';
const { CapacitorKeepScreenOn } = Plugins;
/**
 * Wrapper para el plugin `CapacitorKeepScreenOn`.
 *
 * **Capacitor Community**
 *
 * - Api: {@link https://github.com/go-u/capacitor-keep-screen-on/tree/master/docs/en}
 *
 * ```typescript
 * import { Plugins } from '@capacitor/core';
 * const { CapacitorKeepScreenOn } = Plugins;
 * ```
 */
let CapacitorKeepScreenOnPlugin = class CapacitorKeepScreenOnPlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
    /** Enable keep screen on. */
    enable() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return of(undefined).toPromise();
                }
                else {
                    return KeepAwake.keepAwake();
                }
            });
        });
    }
    /** Disable keep screen on. */
    disable() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (!this.device.isRealPhone) {
                    return of(undefined).toPromise();
                }
                else {
                    return KeepAwake.allowSleep();
                }
            });
        });
    }
    /** Whether keep awake is supported or not. */
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(() => {
                if (this.device.isRealPhone) {
                    return KeepAwake.isSupported();
                }
                else {
                    return Promise.resolve({ isSupported: false });
                }
            });
        });
    }
};
CapacitorKeepScreenOnPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CapacitorKeepScreenOnPlugin);
export { CapacitorKeepScreenOnPlugin };
//# sourceMappingURL=keep-screen-on.js.map