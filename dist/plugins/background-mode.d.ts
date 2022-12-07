import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `BackgroundMode`.
 *
 *
 * **Cordova**
 *
 * - Docs: {@link https://ionicframework.com/docs/native/background-mode}
 * - Repo: {@link https://github.com/katzer/cordova-plugin-background-mode}
 *
 * * Install *
 * npm install cordova-plugin-background-mode
 * npm install @awesome-cordova-plugins/background-mode
 *
 * Need dependencies
 * npm i cordova-plugin-device
 * ionic cap sync
 *
 * Info.plist
 * <key>UIBackgroundModes</key>
     <array>
        <string>fetch</string>
        <string>location</string>
     </array>
 */
/**
 * NOTA: A partir de la versió 31 i derreres s'ha de fer una modificació a l'axiu:
 * /node_modules/cordova-plugin-background-mode/src/android/ForegroundService.java
 *
 * Linia 225
 * PendingIntent.FLAG_UPDATE_CURRENT);
 *
 * Canviar per
 * PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
 */
export declare class BackgroundModePlugin {
    device: DevicePlugin;
    backgroundMode: BackgroundMode;
    protected debug: boolean;
    constructor(device: DevicePlugin, backgroundMode: BackgroundMode);
    enable(): Promise<void>;
    disable(): Promise<void>;
    disableBatteryOptimizations(): void;
    moveToForeground(): void;
    wakeUp(): void;
    moveToBackground(): void;
    get isEnabled(): boolean;
    get isActive(): boolean;
}
