import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `NavigationBarColor`.
 *
 * **Cordova**
 *
 * npm i cordova-plugin-navigationbar-color --save
 * ionic cap sync
 *
 * ```typescript
 * declare var NavigationBar: any;
 * ```
 */
let NavigationBarColorPlugin = class NavigationBarColorPlugin {
    constructor(plt, device) {
        this.plt = plt;
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
    setColor(color) {
        this.plt.ready().then(() => {
            this.device.getInfo().then(value => {
                if (this.device.isRealPhone && this.device.isAndroid) {
                    // Example NavigationBar.backgroundColorByHexString('#1f1f1f');
                    // NavigationBar.backgroundColorByHexString(color);
                    NavigationBar.backgroundColorByName(color === 'dark' ? 'black' : 'white', color === 'dark' ? false : true);
                }
            });
        });
    }
};
NavigationBarColorPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NavigationBarColorPlugin);
export { NavigationBarColorPlugin };
//# sourceMappingURL=navigation-bar-color.js.map