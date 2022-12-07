import { DevicePlugin } from './device';
import { AnimationOptions, BackgroundColorOptions, SetOverlaysWebViewOptions, StatusBarInfo, StyleOptions } from '@capacitor/status-bar';
import { PluginListenerHandle } from '@capacitor/core';
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
export declare class StatusBarPlugin {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    /** iOS only. */
    addListenerStatusTap(callback: () => void): Promise<PluginListenerHandle | void>;
    /** Show the status bar. */
    show(options?: AnimationOptions | undefined): Promise<void>;
    /** Hide the status bar. */
    hide(options?: AnimationOptions | undefined): Promise<void>;
    /** Set the background color of the status bar. */
    setBackgroundColor(options: BackgroundColorOptions): Promise<StatusBarInfo | void>;
    /** Get info about the current state of the status bar. */
    getInfo(): Promise<StatusBarInfo | void>;
    /** Set whether or not the status bar should overlay the webview to allow usage of the space around a device "notch". */
    setOverlaysWebView(options: SetOverlaysWebViewOptions): Promise<void>;
    /** Set the current style of the status bar. */
    setStyle(options: StyleOptions): Promise<void>;
    setStatusBar(mode: 'light' | 'dark'): void;
}
