import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AppInfo, AppLaunchUrl, AppState } from '@capacitor/app';
import { Subject } from 'rxjs';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `App`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitorjs.com/docs/apis/app}
 * - Examples : {@link https://medium.com/javascript-in-plain-english/opening-another-app-from-your-ionic-5-app-becf8c098d0e}
 */
export declare class AppPlugin {
    device: DevicePlugin;
    router: Router;
    platform: Platform;
    protected debug: boolean;
    stateChangedSubject: Subject<AppState>;
    constructor(device: DevicePlugin, router: Router, platform: Platform);
    /** Force exit the app. This should only be used in conjunction with the backButton handler for Android to exit the app when navigation is complete.
     *
     * Ionic handles this itself so you shouldn’t need to call this if using Ionic
     *
     * Returns: never
     */
    exitApp(): Promise<void>;
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
    getInfo(): Promise<AppInfo | undefined>;
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
    getState(): Promise<AppState | undefined>;
    /** Get the URL the app was launched with, if any.
     * ```typescript
     * interface AppLaunchUrl { url: string }
     * ```
     */
    getLaunchUrl(): Promise<AppLaunchUrl | undefined>;
    /** Minimizes the application. */
    minimizeApp(): Promise<void>;
}
