import { OnDestroy } from '@angular/core';
import { KeyboardInfo, KeyboardStyleOptions, KeyboardResizeOptions } from '@capacitor/keyboard';
import { PluginListenerHandle } from '@capacitor/core';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `Keyboard`.
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/keyboard}
 */
export declare class KeyboardPlugin implements OnDestroy {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    ngOnDestroy(): void;
    addListenerWillShow(callback: (info: KeyboardInfo) => void): Promise<PluginListenerHandle | undefined>;
    addListenerDidShow(callback: (info: KeyboardInfo) => void): Promise<PluginListenerHandle | undefined>;
    addListenerWillHide(callback: () => void): Promise<PluginListenerHandle | undefined>;
    addListenerDidHide(callback: () => void): Promise<PluginListenerHandle | undefined>;
    /** Set whether the accessory bar should be visible on the keyboard. We recommend disabling the accessory bar for short forms (login, signup, etc.) to provide a cleaner UI */
    setAccessoryBarVisible(options: {
        isVisible: boolean;
    }): Promise<void>;
    /** Programmatically set the keyboard style. */
    setStyle(options: KeyboardStyleOptions): Promise<void>;
    /** Programmatically set the resize mode. */
    setResizeMode(options: KeyboardResizeOptions): Promise<void>;
    /** Programmatically enable or disable the WebView scroll. */
    setScroll(options: {
        isDisabled: boolean;
    }): Promise<void>;
    /** Show the keyboard. */
    show(): Promise<void>;
    /** Hide the keyboard. */
    hide(): Promise<void>;
}
