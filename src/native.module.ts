import { NgModule, ModuleWithProviders } from '@angular/core';

import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Media } from '@awesome-cordova-plugins/media/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';

import { NativeConfig, NativeConfigType } from './native-config';


@NgModule({
  declarations: [
  ],
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
export class CoreNativeModule  {

  public static forRoot(config: NativeConfigType): ModuleWithProviders<CoreNativeModule> {
    return {
      ngModule: CoreNativeModule,
      providers: [
        {
          provide: 'NativeConfig',
          useValue: Object.assign(NativeConfig, config),
        }
      ]
    };
  }
}
