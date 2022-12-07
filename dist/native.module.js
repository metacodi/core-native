var CoreNativeModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Media } from '@awesome-cordova-plugins/media/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NativeConfig } from './native-config';
let CoreNativeModule = CoreNativeModule_1 = class CoreNativeModule {
    static forRoot(config) {
        return {
            ngModule: CoreNativeModule_1,
            providers: [
                {
                    provide: 'NativeConfig',
                    useValue: Object.assign(NativeConfig, config),
                }
            ]
        };
    }
};
CoreNativeModule = CoreNativeModule_1 = __decorate([
    NgModule({
        declarations: [],
        imports: [
            // RouterModule,
            IonicStorageModule.forRoot()
        ],
        exports: [
        // RouterModule,
        ],
        providers: [
            // Badge,
            InAppBrowser,
            Media,
            File,
            // FileOpener,
            BackgroundMode
        ],
    })
], CoreNativeModule);
export { CoreNativeModule };
//# sourceMappingURL=native.module.js.map