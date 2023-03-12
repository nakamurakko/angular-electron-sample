// https://www.electronjs.org/ja/docs/latest/tutorial/context-isolation

declare global {
  interface Window {
    GreetingsAPI: GreetingsAPI
  }
}

/**
 * GreetingsAPI 用インターフェイス。
 */
export interface GreetingsAPI {
  /**
   * 挨拶を返す。
   *
   * @param whoIs 挨拶する相手
   * @returns 挨拶。
   */
  greeting(whoIs: string): Promise<string>;
}
