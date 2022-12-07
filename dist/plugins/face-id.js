import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NativeConfig } from '../native-config';
import { NativeBiometric } from 'capacitor-native-biometric';
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
let FaceIdPlugin = class FaceIdPlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
    }
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
    isAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(() => {
                if (this.device.isRealPhone) {
                    return NativeBiometric.isAvailable();
                }
                else {
                    return Promise.resolve({ isAvailable: false, biometryType: 0, });
                }
            });
        });
    }
    /** setCredential.
     * { username: "username", password: "password", server: "www.example.com"}
     */
    setCredentials(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(() => {
                if (this.device.isRealPhone) {
                    return NativeBiometric.setCredentials({ username: options.username, password: options.password, server: options.server, });
                }
                else {
                    return Promise.resolve({ isAvailable: false, biometryType: 0, });
                }
            });
        });
    }
    /** getCredentials.
     * { server: "www.example.com"}
     */
    getCredentials(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(() => {
                if (this.device.isRealPhone) {
                    return NativeBiometric.getCredentials({ server: options.server });
                }
                else {
                    return Promise.resolve(undefined);
                }
            });
        });
    }
    /** deleteCredentials.
     * { server: "www.example.com"}
     */
    deleteCredentials(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(() => {
                if (this.device.isRealPhone) {
                    return NativeBiometric.deleteCredentials({ server: options.server });
                }
                else {
                    return Promise.resolve(undefined);
                }
            });
        });
    }
    /** Displays the Face ID or Touch ID screen. */
    auth(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then(value => {
                if (this.device.isRealPhone) {
                    return NativeBiometric.verifyIdentity(options).then(() => true).catch(() => false);
                }
                else {
                    return Promise.resolve(undefined);
                }
            });
        });
    }
};
FaceIdPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FaceIdPlugin);
export { FaceIdPlugin };
//# sourceMappingURL=face-id.js.map