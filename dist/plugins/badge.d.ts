import { IsSupportedResult, GetBadgeResult, PermissionStatus } from '@capawesome/capacitor-badge';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `Badge`.
 *
 * {@link https://github.com/capawesome-team/capacitor-badge}
 */
export declare class BadgePlugin {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    /**
     * export interface IsSupportedResult {
     *   isSupported: boolean;
     * }
     *
     * @returns isSupported: boolean;
     */
    isSupported(): Promise<IsSupportedResult>;
    /**
     * export interface GetBadgeResult {
     *   count: number;
     * }
     *
     * @returns count: number;
     */
    get(): Promise<GetBadgeResult>;
    /** Aumenta en 1 el valor del Badge */
    increase(): Promise<void>;
    /** Devementa en 1 el valor del Badge */
    decrease(): Promise<void>;
    /** Estableix a 0 el valor del Badge */
    clear(): Promise<void>;
    /**
     * export interface PermissionStatus {
     *   display: PermissionState; <--- 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied';
     * }
     *
     * @returns display: PermissionState;
     */
    checkPermissions(): Promise<PermissionStatus>;
    /**
     * export interface PermissionStatus {
     *   display: PermissionState; <--- 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied';
     * }
     *
     * @returns display: PermissionState;
     */
    requestPermissions(): Promise<PermissionStatus>;
    /** Set Badge. */
    setBagde(badgeNumber: number): Promise<void>;
}
