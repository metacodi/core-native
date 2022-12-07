import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ConnectionStatus } from '@capacitor/network';
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
export declare class NetworkPlugin implements OnDestroy {
    protected debug: boolean;
    connectionChangedSubject: Subject<ConnectionStatus>;
    constructor();
    ngOnDestroy(): void;
    /** NetworkStatus. */
    getStatus(): Promise<ConnectionStatus>;
}
