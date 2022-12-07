import { DevicePlugin } from './device';
import { ShowOptions } from '@capacitor/splash-screen';
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
export declare class SplashScreenPlugin {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    /** Show the splash screen. */
    show(options: ShowOptions): Promise<void>;
    /** Hide the splash screen. */
    hide(): Promise<void>;
}
