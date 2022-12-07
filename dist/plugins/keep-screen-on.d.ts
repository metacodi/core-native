import { IsSupportedResult } from '@capacitor-community/keep-awake';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `CapacitorKeepScreenOn`.
 *
 * **Capacitor Community**
 *
 * - Api: {@link https://github.com/go-u/capacitor-keep-screen-on/tree/master/docs/en}
 *
 * ```typescript
 * import { Plugins } from '@capacitor/core';
 * const { CapacitorKeepScreenOn } = Plugins;
 * ```
 */
export declare class CapacitorKeepScreenOnPlugin {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    /** Enable keep screen on. */
    enable(): Promise<void>;
    /** Disable keep screen on. */
    disable(): Promise<void>;
    /** Whether keep awake is supported or not. */
    isSupported(): Promise<IsSupportedResult>;
}
