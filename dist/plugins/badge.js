import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Badge } from '@capawesome/capacitor-badge';
import { CapacitorElectronMetacodi } from '@metacodi/capacitor-electron';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `Badge`.
 *
 * {@link https://github.com/capawesome-team/capacitor-badge}
 */
let BadgePlugin = class BadgePlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
    /**
     * export interface IsSupportedResult {
     *   isSupported: boolean;
     * }
     *
     * @returns isSupported: boolean;
     */
    isSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.isSupported();
        });
    }
    /**
     * export interface GetBadgeResult {
     *   count: number;
     * }
     *
     * @returns count: number;
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.get();
        });
    }
    /** Aumenta en 1 el valor del Badge */
    increase() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.increase();
        });
    }
    /** Devementa en 1 el valor del Badge */
    decrease() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.decrease();
        });
    }
    /** Estableix a 0 el valor del Badge */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.clear();
        });
    }
    /**
     * export interface PermissionStatus {
     *   display: PermissionState; <--- 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied';
     * }
     *
     * @returns display: PermissionState;
     */
    checkPermissions() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.checkPermissions();
        });
    }
    /**
     * export interface PermissionStatus {
     *   display: PermissionState; <--- 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied';
     * }
     *
     * @returns display: PermissionState;
     */
    requestPermissions() {
        return __awaiter(this, void 0, void 0, function* () {
            return Badge.requestPermissions();
        });
    }
    /** Set Badge. */
    setBagde(badgeNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => __awaiter(this, void 0, void 0, function* () {
                if (this.device.isRealPhone) {
                    if (badgeNumber > 0) {
                        Badge.set({ count: badgeNumber });
                    }
                    else {
                        Badge.clear();
                    }
                    return;
                }
                else if (this.device.isElectron) {
                    badgeNumber = badgeNumber === undefined || badgeNumber < 1 ? 0 : badgeNumber;
                    CapacitorElectronMetacodi.setBadge({ value: badgeNumber });
                }
                else {
                    const isSupported = yield this.isSupported();
                    if (isSupported.isSupported) {
                        Badge.set({ count: badgeNumber });
                    }
                    return;
                }
            }));
        });
    }
};
BadgePlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BadgePlugin);
export { BadgePlugin };
//# sourceMappingURL=badge.js.map