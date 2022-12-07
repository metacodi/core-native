import { Platform } from '@ionic/angular';
import { DevicePlugin } from './device';
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
export declare class NavigationBarColorPlugin {
    plt: Platform;
    device: DevicePlugin;
    protected debug: boolean;
    constructor(plt: Platform, device: DevicePlugin);
    setColor(color: any): void;
}
