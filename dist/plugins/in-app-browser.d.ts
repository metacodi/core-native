import { Observable } from 'rxjs';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { DevicePlugin } from './device';
import { BrowserWindowConstructorOptions } from 'electron';
export interface StatusUpdateResults {
    status: 'navigate' | 'close';
    url?: string;
}
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
export declare class InAppBrowserPlugin {
    device: DevicePlugin;
    iab: InAppBrowser;
    protected debug: boolean;
    browserIAP: any;
    isOpened: boolean;
    constructor(device: DevicePlugin, iab: InAppBrowser);
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
    openWindow(options: {
        url: string;
        optionsWindow: InAppBrowserOptions | BrowserWindowConstructorOptions;
    }): Promise<any | InAppBrowserObject>;
    onStatusUpdate(): Observable<StatusUpdateResults>;
    close(): Promise<any>;
}
