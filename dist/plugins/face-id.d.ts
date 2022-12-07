import { DevicePlugin } from './device';
import { AvailableResult, Credentials } from 'capacitor-native-biometric';
export declare type FaceIdResponse = 'TouchId' | 'FaceId' | 'None';
/**
 * Wrapper para el plugin `FaceId`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://github.com/epicshaggy/capacitor-native-biometric}
 *
 * * Install *
 *
 * npm i capacitor-native-biometric
 *
 * Info.plist
 * <key>NSFaceIDUsageDescription</key>
 * <string>For an easier and faster log in.</string>
 *
 * AndroidManifest.xml
 * <uses-permission android:name="android.permission.USE_BIOMETRIC">
 */
export declare class FaceIdPlugin {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    /** Checks if Face ID or Touch ID is available, and returns type if so.
     * BiometryType {
     *   NONE = 0,
     *   TOUCH_ID = 1,
     *   FACE_ID = 2,
     *   FINGERPRINT = 3,
     *   FACE_AUTHENTICATION = 4,
     *   IRIS_AUTHENTICATION = 5
     * }
     */
    isAvailable(): Promise<AvailableResult>;
    /** setCredential.
     * { username: "username", password: "password", server: "www.example.com"}
     */
    setCredentials(options: {
        username: string;
        password: string;
        server: string;
    }): Promise<FaceIdResponse | undefined>;
    /** getCredentials.
     * { server: "www.example.com"}
     */
    getCredentials(options: {
        server: string;
    }): Promise<Credentials | undefined>;
    /** deleteCredentials.
     * { server: "www.example.com"}
     */
    deleteCredentials(options: {
        server: string;
    }): Promise<FaceIdResponse | undefined>;
    /** Displays the Face ID or Touch ID screen. */
    auth(options?: {
        reason?: string;
    }): Promise<any>;
}
