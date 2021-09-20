# 学習【プログラマーのためのDocker教科書】

## Tips

- [Chapter 04](chapter_04_docker_command/tips.md)

## Dockerコマンド

|コマンド|説明|
|---|---|
|docker version|DockerやGo言語のバージョン、OSやアーキテクチャを表示|
|docker system info|Dockerの実行環境の詳細設定を表示|
|docker system df|Dockerが使用しているディスクの利用状況を表示（詳細確認は`-vオプション`）|
|docker pull [イメージ名]|指定のイメージをダウンロード|
|docker image ls|イメージの一覧表示|
|docker container run [起動するイメージ名]|指定のイメージを起動|
|docker container ps|コンテナの状態を確認|
|docker container stats ([確認するコンテナ名])|１つまたは複数のコンテナのリソース使用状況をライブで表示|
|docker stop [停止するコンテナ名]|コンテナを停止|
|docker rm [削除するコンテナ名]|コンテナを削除|
