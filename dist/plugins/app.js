import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { App } from '@capacitor/app';
import { Subject } from 'rxjs';
import { CapacitorElectronMetacodi } from '@metacodi/capacitor-electron';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `App`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitorjs.com/docs/apis/app}
 * - Examples : {@link https://medium.com/javascript-in-plain-english/opening-another-app-from-your-ionic-5-app-becf8c098d0e}
 */
let AppPlugin = class AppPlugin {
    constructor(device, router, platform) {
        this.device = device;
        this.router = router;
        this.platform = platform;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        this.stateChangedSubject = new Subject();
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
        device.ready().then(() => {
            // NOTA: Evitem que ens els navegadors i/o Electron es descon al canviar de pantalla.
            if (this.device.isRealPhone) {
                // Ens suscribim als canvis d'estat per notificar-los a través del BehaviorSubject creat.
                App.addListener('appStateChange', state => this.stateChangedSubject.next(state));
            }
            /** A la documentació diu que el eventName és 'ionBackButton'.
             * > "When running in a Capacitor or Cordova application, Ionic Framework
             * >  will emit an ionBackButton event when a user presses the hardware back button."
             * {@link https://ionicframework.com/docs/developing/hardware-back-button#hardware-back-button-in-capacitor-and-cordova }
             */
            // if (this.device.isAndroid) {
            App.addListener('backButton', (data) => {
                if (this.debug) {
                    console.log('backButton state:', JSON.stringify(data), this.router.url);
                }
                const onRoot = !data.canGoBack || this.router.url === '/home' || this.router.url === '/login';
                if (onRoot) {
                    this.exitApp();
                }
            });
            // this.platform.ready().then(() => {
            //   this.platform.backButton.subscribeWithPriority(-1, () => {
            //     // const onRoot = !this.routerOutlet.canGoBack() || this.router.url === '/home' || this.router.url === '/login';
            //     const onRoot = !this.routerOutlet.canGoBack();
            //     if (this.debug) { console.log(this.constructor.name + '.ensureExitAppOnAndroid()', onRoot); }
            //     if (onRoot) { App.exitApp(); }
            //   });
            // });
            // }
        });
    }
    /** Force exit the app. This should only be used in conjunction with the backButton handler for Android to exit the app when navigation is complete.
     *
     * Ionic handles this itself so you shouldn’t need to call this if using Ionic
     *
     * Returns: never
     */
    exitApp() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => {
                if (this.device.isRealPhone) {
                    return App.exitApp();
                }
                else if (this.device.isElectron) {
                    return CapacitorElectronMetacodi.exitApp();
                }
                else {
                    return Promise.resolve();
                }
            });
        });
    }
    /** Return information about the app.
     * ```typescript
     * interface AppInfo { name: string; id: string; build: string; version: string; }
     * ```
     *
     * Example:
     * ```typescript
     * const info = { name: 'novaApp', build: '1', version: '1.0', id: 'test.metacodi.com' };
     * ```
     */
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => {
                if (this.device.isRealPhone || this.device.isElectron) {
                    return App.getInfo();
                }
                ;
                return Promise.resolve(undefined);
            });
        });
    }
    // async getInfo(): Promise<AppInfo> {
    //   return App.getInfo();
    // }
    /** Gets the current app state.
     * ```typescript
     * interface AppState { isActive: boolean }
     * ```
     *
     * Example:
     * ```typescript
     * const state = { isActive: true }
     * ```
     */
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.ready().then(() => {
                if (this.device.isRealPhone || this.device.isElectron) {
                    return App.getState();
                }
                return Promise.resolve({ isActive: true });
            });
        });
    }
    /** Get the URL the app was launched with, if any.
     * ```typescript
     * interface AppLaunchUrl { url: string }
     * ```
     */
    getLaunchUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return App.getLaunchUrl();
        });
    }
    /** Minimizes the application. */
    minimizeApp() {
        return __awaiter(this, void 0, void 0, function* () {
            return App.minimizeApp();
        });
    }
};
AppPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppPlugin);
export { AppPlugin };
//# sourceMappingURL=app.js.map