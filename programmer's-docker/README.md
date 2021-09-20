# 学習【プログラマーのためのDocker教科書】

## Tips

- [Chapter 04](chapter_04_docker_command/tips.md)

## Dockerコマンド

詳細は[公式サイト](https://matsuand.github.io/docs.docker.jp.onthefly/engine/reference/commandline/cli/)を参照

|コマンド|説明|
|---|---|
|docker version|DockerやGo言語のバージョン、OSやアーキテクチャを表示|
|docker system info|Dockerの実行環境の詳細設定を表示|
|docker system df|Dockerが使用しているディスクの利用状況を表示（詳細確認は`-vオプション`）|
|docker image pull [イメージ名]|イメージをダウンロード|
|docker image ls|イメージの一覧表示|
|docker image inspect [イメージ名]|イメージの詳細情報を表示|
|docker image tag [DockerHubのユーザー名]/[イメージ名]:[タグ名]|イメージのタグ設定。[DockerHubのユーザー名]はDockerHubへイメージを登録する際に必須|
|docker image rm [イメージ名]|イメージの削除|
|docker image prune|未使用のイメージを削除|
|docker image push [`docker image tag`で設定したタグ]|Docker Hubにイメージをアップロード|
|docker container run [起動するイメージ名]|イメージを起動|
|docker container ps|コンテナの状態を確認|
|docker container stats ([確認するコンテナ名])|１つまたは複数のコンテナのリソース使用状況をライブで表示|
|docker stop [停止するコンテナ名]|コンテナを停止|
|docker rm [削除するコンテナ名]|コンテナを削除|
|docker login|Docker Hubへのログイン|
|docker logout|Docker Hubへのログアウト|