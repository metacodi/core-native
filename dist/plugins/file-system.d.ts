import { DevicePlugin } from './device';
import { Directory, Encoding, ReadFileOptions, ReadFileResult, AppendFileOptions, RmdirOptions, ReaddirOptions, GetUriOptions, StatOptions, RenameOptions, CopyOptions, ReaddirResult, GetUriResult, StatResult, CopyResult } from '@capacitor/filesystem';
export declare enum FileSystemPluginDirectory {
    Download = "DOWNLOAD",
    Documents = "DOCUMENTS",
    Cache = "CACHE",
    Data = "DATA",
    External = "EXTERNAL",
    ExternalStorage = "EXTERNAL_STORAGE"
}
declare enum FileSyetemElectron {
    Download = "downloads",
    Documents = "documents",
    Cache = "cache",
    Data = "userData",
    External = "documents",
    ExternalStorage = "documents"
}
export interface FileExistsResult {
    status: boolean;
    fileNameFullPath?: string;
    systemPath?: string;
    message?: string;
    error?: string;
}
export interface DownloadFileResult {
    status: boolean;
    fileName?: string;
    systemPath?: string;
    fullFileSystemPath?: string;
    message?: string;
    error?: string;
}
export interface MkdirFileResult {
    status: boolean;
    message?: string;
    error?: string;
}
export interface GenericFileResult {
    status: boolean;
    value: string;
    message?: string;
    error?: string;
}
/**
 * Wrapper para el plugin `Filesystem`.
 *
 * npm i file-saver
 * npm i @types/file-saver
 * npm i @capacitor/filesystem
 *
 * **Capacitor**
 *
 * - Api: {@link https://capacitor.ionicframework.com/docs/apis/filesystem}
 * - Api Downloader : {@link https://github.com/veluxa/capacitor-plugin-file-downloader#english}
 *
 * ```typescript
 * import 'capacitor-plugin-file-downloader';
 * import { Plugins } from '@capacitor/core';
 * import { writeFile } from 'capacitor-blob-writer';
 * import { spawn } from 'child_process';
 * const { Filesystem, FileDownloader } = Plugins;
 * ```
 */
export declare class FileSystemPlugin {
    device: DevicePlugin;
    protected debug: boolean;
    constructor(device: DevicePlugin);
    /** Read a file from disk. */
    readFile(options: ReadFileOptions): Promise<ReadFileResult>;
    /** Write a file to disk in the specified location on device. */
    writeFile(options: {
        fileName: string;
        fileType?: string;
        path?: string;
        directory?: FileSystemPluginDirectory;
        data?: any;
        encoding?: Encoding;
        recursive?: boolean;
    }): Promise<GenericFileResult>;
    /** Append to a file on disk in the specified location on device. */
    appendFile(options: AppendFileOptions): Promise<void>;
    /** Delete a file from disk. */
    deleteFile(options: {
        fileName: string;
        path?: string;
        directory?: FileSystemPluginDirectory;
    }): Promise<GenericFileResult>;
    /**
     * Create a directory.
     *
     * @path : string - The path of the new directory
     * @directory : FileSystemPluginDirectory - System directory of device. to make the new directory in
     * @recursive ?: boolean; - Whether to create any missing parent directories as well. Defaults to false
     */
    mkdir(options: {
        path: string;
        directory: FileSystemPluginDirectory;
        recursive?: boolean;
    }): Promise<MkdirFileResult>;
    /** Remove a directory. */
    rmdir(options: RmdirOptions): Promise<void>;
    /** Return a list of files from the directory (not recursive). */
    readdir(options: ReaddirOptions): Promise<ReaddirResult>;
    /** Return full File URI for a path and directory. */
    getUri(options: GetUriOptions): Promise<GetUriResult>;
    /** Return data about a file. */
    stat(options: StatOptions): Promise<StatResult>;
    /** Rename a file or directory. */
    rename(options: RenameOptions): Promise<void>;
    /** Copy a file or directory. */
    copy(options: CopyOptions): Promise<CopyResult>;
    /**
     * Open File.
     *
     * @fileName - Filename of file example: 'image-downloaded.jpg'
     * @fileType - If you are wondering what MIME-type should you pass as the second argument to open function, Example 'application/pdf' para documento PDF, here is a list of all known MIME-types: 'http://svn.apache.org/viewvc/httpd/httpd/trunk/docs/conf/mime.types?view=co'
     * @path - Path to destination example: 'images/internet' 'images' where is folder and 'internet' is subfolder.
     * @directory - System directory of device.
     * @showDialog - Opens with system modal to open file with an already installed app.
     * Return GenericFileResult type;
     */
    openfile(options: {
        fileName?: string;
        fileType?: string;
        path?: string;
        directory?: FileSystemPluginDirectory;
        fullPath?: string;
        showDialog?: boolean;
    }): Promise<GenericFileResult>;
    /**
     * Download File a file or directory.
     *
     * @url - Url of file exaple: 'http://www.domain.com/files/image.jpg'
     * @fileName - Filename of file example: 'image-downloaded.jpg'
     * @path - Path to destination example: 'images/internet' 'images' where is folder and 'internet' is subfolder.
     * @directory - System directory of device.
     * Return DownloadFileResult type;
     */
    downloadFile(options: {
        url: string;
        fileName: string;
        path: string;
        directory: FileSystemPluginDirectory;
    }): Promise<DownloadFileResult>;
    /**
     * Check if file exist on directorSystem and path.
     * Params:
     *
     * @fileName — Filename with extension.
     * @path - Especific path on system direcotry
     * @directory - direcotry of system type FilesystemDirectory
     * Return isfileExistResult type;
     */
    fileExists(options: {
        fileName: string;
        path: string;
        directory?: FileSystemPluginDirectory;
    }): Promise<FileExistsResult>;
    getFileSystemDirectoryDevices(directory: FileSystemPluginDirectory | undefined): Directory;
    getFileSystemDirectoryDesktop(directory: FileSystemPluginDirectory): FileSyetemElectron;
    private base64toBlob;
    private getMimeType;
}
export {};
