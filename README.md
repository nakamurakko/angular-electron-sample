# angular-electron-sample

Sample of Angular running with Electron.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## デバッグ手準備

1. パッケージをインストールする。
    ```bat
    npm install
    ```
1. デバッグビルドを実行する。
    ```bat
    npm run build:development:all
    ```
1. デバッグ構成 `Debug All` を選択してデバッグを開始する。

## EXE 作成手順

1. EXE ビルドを実行する。
    ```bat
    npm run build-portable
    ```

## Electron - Angular 間のやりとり

`preload.ts` に定義した API を介してやりとりする。[コンテキストの分離](https://www.electronjs.org/ja/docs/latest/tutorial/context-isolation)を参照。
加えて、 Angular 側で使用できるように `renderer.d.ts` に API のインターフェイスを公開する。
