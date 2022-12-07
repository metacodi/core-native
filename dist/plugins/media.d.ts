import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { DevicePlugin } from './device';
/**
 * Wrapper para el plugin `Media`. Necessita el plugin de `File` com a dependècia
 *
 * **Cordova**
 *
 *  - API:{@link https://ionicframework.com/docs/native/media}
 *
 * $ npm install cordova-plugin-media cordova-plugin-file
 * $ npm install @awesome-cordova-plugins/media @awesome-cordova-plugins/file
 *
 * Add on app.modules.ts
 *
 * ```typescript
 * import { File } from '@awesome-cordova-plugins/file/ngx';
 * import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
 *
 * providers: [
 *   Media, File
 * ],
 * ```
 */
export declare class MediaPlugin {
    private media;
    device: DevicePlugin;
    protected debug: boolean;
    file: MediaObject;
    soundPlay: any;
    playSounds: ElementRef;
    isPlay: boolean;
    loop: boolean;
    constructor(media: Media, device: DevicePlugin);
    /** Create a media and play.
     *
     * @param string src — A URI containing the audio content.
     * If audio file is on 'assets', example: 'audio/file.mp3'
     * @iosOptions : {
     *   @numberOfLoops ?: number;
     *   @playAudioWhenScreenIsLocked ?: boolean;
     * }
     * @external boolean:false default
     */
    play(options: {
        src: string;
        loop?: boolean;
        iosOptions?: {
            numberOfLoops?: number;
            playAudioWhenScreenIsLocked?: boolean;
        };
        external?: boolean;
    }): Promise<any>;
    /** Media object has completed the current play, record, or stop action. */
    onSuccess(): Observable<any>;
    /** Indicate status changes. It takes a integer status code
     * Media.MEDIA_NONE = 0;
     * Media.MEDIA_STARTING = 1;
     * Media.MEDIA_RUNNING = 2;
     * Media.MEDIA_PAUSED = 3;
     * Media.MEDIA_STOPPED = 4;
     */
    onStatusUpdate(): Observable<any>;
    /** If an error occurs. It takes an integer error code */
    onError(): Observable<any>;
    /** Sets the current position within an audio file.
     *
     * @param milliseconds — The time position you want to set for the current audio file.
     */
    seekTo(milliseconds: number): void;
    /** Stop an audio file. */
    stop(): void;
    /** Set the volume for an audio file.
     *
     * @param volume — The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    setVolume(volume: number): void;
    /** Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     *
     * @returns — Returns the duration of an audio file.
     */
    getDuration(): number;
    /** Get the current position within an audio file. Also updates the Media object's position parameter.
     *
     * @returns — Returns a promise with the position of the current recording.
     */
    getCurrentPosition(): Promise<any>;
}
