import { __awaiter, __decorate } from "tslib";
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NativeConfig } from '../native-config';
/**
 * Wrapper para el plugin `Storage`.
 *
 * Añade información del módulo (aplicación) al prinicipio de las claves.
 *
 * **Capacitor**
 *
 * - Api: {@link https://github.com/ionic-team/ionic-storage}
 *
 * First, edit your NgModule declaration in src/app/app.module.ts or in the module for the component you'll
 * use the storage library in, and add IonicStorageModule as an import:
 *
 * import { IonicStorageModule } from '@ionic/storage-angular';
 *
 *   @NgModule({
 *      imports: [
 *        IonicStorageModule.forRoot()
 *      ]
 *    })
 *
 * NOTA: les dades es guarden en Aplication -> IndexedDB -> _ionicstorage -> http://localhost:8100 -> ionickv
 *
 * {@link https://developer.chrome.com/docs/devtools/storage/indexeddb/?utm_source=devtools }
 */
let StoragePlugin = class StoragePlugin {
    constructor() {
        this.debug = true && NativeConfig.debugEnabled && NativeConfig.debugPlugins.includes(this.constructor.name);
        this.ready();
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.storage) {
                this.storage = new Storage();
                yield this.storage.create();
            }
            return Promise.resolve(this.storage);
        });
    }
    get packageName() {
        return (NativeConfig === null || NativeConfig === void 0 ? void 0 : NativeConfig.app) ? NativeConfig.app.package || '' : '';
    }
    /** Clear the entire key value of app storage. */
    clear(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.keys(moduleName).then(keys => {
                Promise.all(keys.map(key => this.remove(key, moduleName)));
            });
        });
    }
    /** Get the value associated with the given key. */
    get(key, moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const storage = yield this.ready();
            const appName = this.packageName + (moduleName ? '.' + moduleName : '');
            return storage.get(`${appName}.${key}`).then((value) => value ? value : undefined);
        });
    }
    /** Returns a promise that resolves with the keys in the app storage. */
    keys(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const storage = yield this.ready();
            const appName = this.packageName + (moduleName ? '.' + moduleName : '');
            return storage.keys().then(result => result.filter(key => key.startsWith(`${appName}.`)).map(key => key.slice(`${appName}.`.length)));
        });
    }
    /** Returns a promise that resolves with the number of keys app storage. */
    length(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.keys(moduleName).then(keys => keys.length);
        });
    }
    /** Remove any value associated with this key. */
    remove(key, moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const storage = yield this.ready();
            const appName = this.packageName + (moduleName ? '.' + moduleName : '');
            return storage.remove(`${appName}.${key}`).then(() => true);
        });
    }
    /** Set the value for the given key. */
    set(key, value, moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const storage = yield this.ready();
            const appName = this.packageName + (moduleName ? '.' + moduleName : '');
            return storage.set(`${appName}.${key}`, value ? value : undefined).then(() => true);
        });
    }
};
StoragePlugin = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StoragePlugin);
export { StoragePlugin };
//# sourceMappingURL=storage.js.map