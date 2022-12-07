import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `SplashScreen`.
 *
 * **Cordova**
 *
 * ```typescript
 * import { SplashScreen } from '@ionic-native/splash-screen/ngx';
 * ```
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/splash-screen}
 *
 *
 * SplashScreen.show();
 * SplashScreen.hide();
 * ```
 */
let SplashScreenPlugin = class SplashScreenPlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
    /** Show the splash screen. */
    show(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => {
                if (this.device.isRealPhone) {
                    return SplashScreen.show();
                }
                else {
                    return;
                }
            });
        });
    }
    /** Hide the splash screen. */
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => {
                if (this.device.isRealPhone) {
                    return SplashScreen.hide();
                }
                else {
                    return;
                }
            });
        });
    }
};
SplashScreenPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SplashScreenPlugin);
export { SplashScreenPlugin };
//# sourceMappingURL=splash-screen.js.map