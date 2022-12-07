import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Network } from '@capacitor/network';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `Network`.
 *
 * **Cordova**
 *
 * - Docs: {@link https://ionicframework.com/docs/native/network}
 * - Repo: {@link https://github.com/apache/cordova-plugin-network-information}
 *
 * ```bash
 * ionic cordova plugin add cordova-plugin-network-information
 * npm install @ionic-native/network --save
 * ```
 * ```typescript
 * import { Network } from '@ionic-native/network/ngx';
 * ```
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/network}
 *
 * ```typescript
 * import { Plugins } from '@capacitor/core';
 * const { Network } = Plugins;
 *
 * Network.show();
 * Network.hide();
 * ```
 */
let NetworkPlugin = class NetworkPlugin {
    constructor() {
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        this.connectionChangedSubject = new Subject();
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
        Network.addListener('networkStatusChange', status => this.connectionChangedSubject.next(status));
    }
    ngOnDestroy() {
        Network.removeAllListeners();
    }
    // /** iOS only. */
    // addListenerNetworkStatusChange(callback: (status: ConnectionStatus) => void): PluginListenerHandle {
    //   return Network.addListener('networkStatusChange', callback);
    // }
    /** NetworkStatus. */
    getStatus() {
        return Network.getStatus();
    }
};
NetworkPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NetworkPlugin);
export { NetworkPlugin };
//# sourceMappingURL=network.js.map