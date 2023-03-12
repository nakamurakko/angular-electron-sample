// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('GreetingsAPI', {
  /**
   * 挨拶を返す。
   *
   * @param whoIs 挨拶する相手
   * @returns 挨拶。
   */
  greeting: (whoIs: string) => ipcRenderer.invoke('greeting', whoIs)
});
