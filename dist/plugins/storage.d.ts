import { Storage } from '@ionic/storage-angular';
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
export declare class StoragePlugin {
    protected debug: boolean;
    private storage;
    constructor();
    ready(): Promise<Storage>;
    get packageName(): string;
    /** Clear the entire key value of app storage. */
    clear(moduleName?: string): Promise<void>;
    /** Get the value associated with the given key. */
    get(key: string, moduleName?: string): Promise<any>;
    /** Returns a promise that resolves with the keys in the app storage. */
    keys(moduleName?: string): Promise<string[]>;
    /** Returns a promise that resolves with the number of keys app storage. */
    length(moduleName?: string): Promise<any>;
    /** Remove any value associated with this key. */
    remove(key: string, moduleName?: string): Promise<any>;
    /** Set the value for the given key. */
    set(key: string, value: any, moduleName?: string): Promise<any>;
}
