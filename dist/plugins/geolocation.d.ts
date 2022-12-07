import { Subject } from 'rxjs';
import { CallbackID, GeolocationPluginPermissions, Position, PositionOptions, WatchPositionCallback } from '@capacitor/geolocation';
import { DevicePlugin } from './device';
import { AppPlugin } from './app';
import { BackgroundModePlugin } from './background-mode';
/**
 * Wrapper para el plugin `Geolocation`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/geolocation}
 * - Api: {@link https://github.com/capacitor-community/background-geolocation}
 *
 * ** Install **
 * npm i @capacitor/geolocation
 * npm i @capacitor-community/background-geolocation
 *
 *
 * ```typescript
 * import { Plugins } from '@capacitor/core';
 * const { Geolocation } = Plugins;
 * ```
 */
/**
 * NOTA:
 *
 * Recorda informar dels info.list per IOS i AndroidManifes.xml per android,
 *
 * Si vols activar el brackgound Mode Geolocation, tens que anar a les configuració del dispositiu als permisos de la geolocalitzacio de l'app i activar 'Geo Sempre'
 */
export declare class GeolocationPlugin {
    device: DevicePlugin;
    app: AppPlugin;
    backgroundMode: BackgroundModePlugin;
    protected debug: boolean;
    /** Referència a la promesa retornada per obtenir la posició. */
    positionPromise: Promise<Position> | undefined;
    /** Identificador del procés de watching pel backgraound geolocation. */
    backgroundWatcherId: any;
    /** Indicador d'estat per iniciar o aturar el watcher quan l'app passa a segon pla. */
    continuousGeolocationRequired: boolean;
    /** Subscriptor intern per obtenir la posició en background mode. */
    backgroundGeolocationSubject: Subject<Position>;
    user: any;
    connection: any;
    constructor(device: DevicePlugin, app: AppPlugin, backgroundMode: BackgroundModePlugin);
    /** Comprobar permisos de ubicación
     * {"location":"granted","coarseLocation":"granted"} || {"errorMessage":"Location services are not enabled"}
     */
    checkPermissions(): Promise<PermissionStatus>;
    /** Solicitar permisos de ubicación.
     * {"location":"granted","coarseLocation":"granted"} || {"errorMessage":"Location services are not enabled"}
     */
    requestPermissions(permissions?: GeolocationPluginPermissions | undefined): Promise<PermissionStatus>;
    /** Obtener la ubicación GPS actual del dispositivo. */
    getCurrentPosition(options?: PositionOptions): Promise<Position>;
    /** Get the current GPS location of the device. */
    watchPosition(options: PositionOptions, callback: WatchPositionCallback): Promise<CallbackID>;
    /** Clear a given watch. */
    clearWatch(options: {
        id: string;
    }): Promise<void>;
    geolocationPos(): Promise<Position>;
    openSettings(): Promise<void>;
    setContinuousGeolocationRequired(value: boolean): Promise<void>;
    private onAppStateChanged;
    startBackgroundGeolocation(): void;
    private stopBackgroundGeolocation;
}
