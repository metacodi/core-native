import { OnDestroy } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { PermissionStatus } from '@capacitor/local-notifications';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `Network`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitorjs.com/docs/apis/local-notifications}
 *
 * ```typescript
 * import { Plugins } from '@capacitor/core';
 * const { LocalNotifications } = Plugins;
 *
 * areEnabled();
 * requestPermission();
 * send(title: string, message: string);
 * addListenerlocalNotificationReceived()
 * addListenerlocalNotificationActionPerformed()
 * ```
 */
export declare class LocalNotificationPlugin implements OnDestroy {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    ngOnDestroy(): void;
    addListenerlocalNotificationReceived(callback: (notification: any) => void): PluginListenerHandle;
    addListenerlocalNotificationActionPerformed(callback: (notificationAction: any) => void): PluginListenerHandle;
    requestPermission(): Promise<boolean>;
    checkPermissions(): Promise<PermissionStatus>;
    push(options: {
        idNotification: number;
        title: string;
        message?: string;
        sound?: string;
        schedule?: Date;
    }): Promise<any>;
    cancelAllLocalNotifications(): void;
}
