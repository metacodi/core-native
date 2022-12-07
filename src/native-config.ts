
export type PluginType = 
  'AppPlugin' |
  'BackgroundModePlugin' |
  'BadgePlugin' |
  'DevicePlugin' |
  'FaceIdPlugin' |
  'FileSystemPlugin' |
  'GeolocationPlugin' |
  'InAppBrowserPlugin' |
  'CapacitorKeepScreenOnPlugin' |
  'KeyboardPlugin' |
  'LocalNotificationsPlugin' |
  'MediaPlugin' |
  'NavigationBarColorPlugin' |
  'NetworkPlugin' |
  'SpeechRecognitionPlugin' |
  'SplashScreenPlugin' |
  'StatusBarPlugin' |
  'StoragePlugin'
;

export interface NativeConfigType {
  debugEnabled: boolean;
  debugPlugins: PluginType[];
  app: {
    package: string;
  }
}


export const NativeConfig: NativeConfigType = {
  debugEnabled: false,
  debugPlugins: [
    'AppPlugin',
    'BackgroundModePlugin',
    'BadgePlugin',
    'DevicePlugin',
    'FaceIdPlugin',
    'FileSystemPlugin',
    'GeolocationPlugin',
    'InAppBrowserPlugin',
    'CapacitorKeepScreenOnPlugin',
    'KeyboardPlugin',
    'LocalNotificationsPlugin',
    'MediaPlugin',
    'NavigationBarColorPlugin',
    'NetworkPlugin',
    'SpeechRecognitionPlugin',
    'SplashScreenPlugin',
    'StatusBarPlugin',
    'StoragePlugin',
  ],
  app: {
    package: '',
  },
};
