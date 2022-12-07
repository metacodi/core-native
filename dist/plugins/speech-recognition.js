import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `SpeechRecognition`.
 *
 * **Capacitor**
 *
 * - Api: {@link https://github.com/capacitor-community/speech-recognition}
 *
 * **INSTALL NOTES**:
 *
 * Replace line:296 a la funció `OnError` del puglin de java.
 *
 * `node_modules/@capacitor-community/speech-recognition/android/src/main/java/com/getcapacitor/community/speechrecognition/SpeechRecognition.java`
 * ```java
 * public void onError(int error) {
 *     SpeechRecognition.this.stopListening();
 *     String errorMssg = getErrorText(error);
 *     if (this.call != null) {
 *         this.call.success(new JSObject().put("status", "error").put("message", errorMssg));
 *     }
 * }
 * ```
 *
 * NOTA: Recorda posar això en ios/App/App/Info.plist
  <key>NSMicrophoneUsageDescription</key>
    <string>For calls VOICE IP</string>
    <key>NSSpeechRecognitionUsageDescription</key>
    <string>Recognize speech</string>
 */
let SpeechRecognitionPlugin = class SpeechRecognitionPlugin {
    constructor(device) {
        this.device = device;
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        this.partialResultsSubject = new Subject();
        if (this.debug) {
            console.log(this.constructor.name + '.constructor()');
        }
        SpeechRecognition.addListener('partialResults', (data) => this.partialResultsSubject.next(data));
    }
    /**
     * This method will return list of languages supported by the speech recognizer.
     *
     * @param none
     * @returns languages - array string of languages.
     * example {"languages":[
     *   "af-ZA","az-AZ","id-ID","ms-MY","jv-ID","su-ID","ca-ES","cs-CZ","da-DK","de-DE","de-AT","et-EE","en-AU","en-CA","en-001","en-GH","en-IN","en-IE","en-KE","en-NZ","en-NG","en-PH","en-SG",
     *   "en-ZA","en-TZ","en-GB","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-EC","es-US","es-SV","es-ES","es-GT","es-HN","es-MX","es-NI","es-PA","es-PY","es-PE","es-PR","es-DO","es-UY",
     *   "es-VE","eu-ES","fil-PH","fr-FR","fr-CA","gl-ES","hr-HR","zu-ZA","is-IS","it-IT","sw","sw-TZ","lv-LV","lt-LT","hu-HU","nl-NL","nb-NO","uz-UZ","pl-PL","pt-BR","pt-PT","ro-RO","sl-SI",
     *   "sk-SK","fi-FI","sv-SE","vi-VN","tr-TR","el-GR","bg-BG","ru-RU","sr-RS","uk-UA","ka-GE","hy-AM","he-IL","ar-IL","ar-JO","ar-AE","ar-BH","ar-DZ","ar-SA","ar-KW","ar-MA","ar-TN","ar-OM",
     *   "ar-PS","ar-QA","ar-LB","ar-EG","fa-IR","ur-PK","ur-IN","am-ET","hi-IN","ta-IN","ta-LK","ta-SG","ta-MY","bn-BD","bn-IN","km-KH","kn-IN","mr-IN","gu-IN","si-LK","te-IN","ml-IN","ne-NP",
     *   "lo-LA","th-TH","my-MM","ko-KR","cmn-Hans-CN","cmn-Hans-HK","cmn-Hant-TW","yue-Hant-HK","ja-JP","en-ID","en-TH"
     * ]}
     */
    getSupportedLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then((value) => __awaiter(this, void 0, void 0, function* () {
                if (!this.device.isRealPhone) {
                    return Promise.resolve({ languages: [] });
                }
                else {
                    return yield SpeechRecognition.getSupportedLanguages();
                }
            }));
        });
    }
    /**
     * This method will start to listen for utterance.
     *
     * @param language - language key returned from getSupportedLanguages()
     *        maxResults - maximum number of results to return (5 is max)
     *        prompt - prompt message to display on popup (Android only)
     *        partialResults - return partial results if found
     *        popup - display popup window when listening for utterance (Android only)
     * @returns example
     *    OK: {"status":"success","matches":["oye taxi","teletaxi","calle taxi","Toyota taxi","coge taxi","taxi","hoy taxi","oh yeah taxi","porque taxi","oie taxi"]}
     *    ERROR: {"save":false,"callbackId":"118515648","pluginId":"SpeechRecognition","methodName":"start","success":false,"error":{"message":"No match"}}
     */
    start(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then((value) => __awaiter(this, void 0, void 0, function* () {
                if (!this.device.isRealPhone) {
                    return Promise.resolve();
                }
                else {
                    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                        const result = yield SpeechRecognition.start({
                            language: options === null || options === void 0 ? void 0 : options.language,
                            maxResults: options === null || options === void 0 ? void 0 : options.maxResults,
                            prompt: options === null || options === void 0 ? void 0 : options.prompt,
                            partialResults: options === null || options === void 0 ? void 0 : options.partialResults,
                            popup: false
                        });
                        resolve(result);
                    }));
                }
            }));
        });
    }
    /**
     * This method will stop listening for utterance
     *
     * @param none
     * @returns void
     */
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then((value) => __awaiter(this, void 0, void 0, function* () {
                if (!this.device.isRealPhone) {
                    return of(undefined).toPromise();
                }
                else {
                    return yield SpeechRecognition.stop();
                }
            }));
        });
    }
    /**
     * This method will check if speech recognition feature is available on the device.
     *
     * @param none
     * @returns available - boolean true/false for availability
     */
    available() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then((value) => __awaiter(this, void 0, void 0, function* () {
                if (!this.device.isRealPhone) {
                    return of(false).toPromise();
                }
                else {
                    return yield SpeechRecognition.available();
                }
            }));
        });
    }
    /**
     * This method will check for audio permissions.
     *
     * @param none
     * @returns permission - boolean true/false if permissions are granted
     * example: {"permission":true}
     */
    hasPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then((value) => __awaiter(this, void 0, void 0, function* () {
                if (!this.device.isRealPhone) {
                    return of(false).toPromise();
                }
                else {
                    return yield SpeechRecognition.hasPermission();
                }
            }));
        });
    }
    /**
     * This method will prompt the user for audio permission.
     *
     * @param none
     * @returns void
     */
    requestPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.device.getInfo().then((value) => __awaiter(this, void 0, void 0, function* () {
                if (!this.device.isRealPhone) {
                    return of(undefined).toPromise();
                }
                else {
                    return yield SpeechRecognition.requestPermission();
                }
            }));
        });
    }
};
SpeechRecognitionPlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SpeechRecognitionPlugin);
export { SpeechRecognitionPlugin };
//# sourceMappingURL=speech-recognition.js.map