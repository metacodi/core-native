import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
// import { LocalNotificationEnabledResult, Plugins, PluginListenerHandle, NotificationPermissionResponse } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { NativeConfig } from '../native-config';
// const { LocalNotifications } = Plugins;
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
let LocalNotificationPlugin = class LocalNotificationPlugin {
    constructor(
    ///// public device: DevicePlugin,
    // public electronService: ElectronService,
    device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
        this.device.ready().then(() => {
            // this.checkPermissions().then(granted => {
            //   if (this.debug) {
            //     if (this.debug) { console.log(this.constructor.name + '.requestPermission', granted); }
            //   }
            // });
            this.addListenerlocalNotificationActionPerformed((notification) => {
                if (this.debug) {
                    console.log(this.constructor.name + '.addListenerlocalNotificationActionPerformed: ', notification);
                }
            });
            this.addListenerlocalNotificationReceived((notification) => {
                if (this.debug) {
                    console.log(this.constructor.name + '.addListenerlocalNotificationReceived: ', notification);
                }
            });
        });
    }
    ngOnDestroy() {
        LocalNotifications.removeAllListeners();
    }
    addListenerlocalNotificationReceived(callback) {
        return LocalNotifications.addListener('localNotificationReceived', callback);
    }
    addListenerlocalNotificationActionPerformed(callback) {
        // this.electronService.
        return LocalNotifications.addListener('localNotificationActionPerformed', callback);
    }
    requestPermission() {
        return new Promise((resolve, reject) => {
            // if (!this.electronService.isElectronApp) { return resolve(false); }
            LocalNotifications.requestPermissions().then((response) => {
                if (response.display === 'granted') {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    checkPermissions() {
        return this.device.getInfo().then(value => LocalNotifications.checkPermissions());
    }
    push(options) {
        return new Promise((resolve, reject) => {
            let localUrl = '';
            if (this.device.isAndroid) {
                localUrl = '/android_asset/public/assets/audio/';
            }
            else if (this.device.isIos) {
                localUrl = '/assets/audio/';
            }
            const at = options.schedule === undefined ? new Date(Date.now() + 500) : options.schedule;
            if (this.debug) {
                console.log('Local Notification scheduled sound => ', localUrl + options.sound);
            }
            LocalNotifications.schedule({
                notifications: [
                    {
                        title: options.title,
                        body: options.message ? options.message : '',
                        id: options.idNotification,
                        schedule: { at },
                        sound: options.sound ? localUrl + options.sound : '',
                        actionTypeId: '',
                        extra: null
                    }
                ]
            }).then(() => { resolve(true); });
        });
    }
    cancelAllLocalNotifications() {
        const ids = [];
        LocalNotifications.getPending().then(pendings => {
            pendings.notifications.map(l => { ids.push({ id: l.id }); });
            if (ids.length > 0) {
                const options = { notifications: ids };
                LocalNotifications.cancel(options);
            }
        });
    }
};
LocalNotificationPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LocalNotificationPlugin);
export { LocalNotificationPlugin };
//# sourceMappingURL=local-notification.js.map