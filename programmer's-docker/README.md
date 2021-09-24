# 学習【プログラマーのためのDocker教科書】

## Tips

- [Chapter 04](chapter_04_docker_command/tips.md)

## リンク

- [Dockerコマンドラインリファレンス](https://matsuand.github.io/docs.docker.jp.onthefly/engine/reference/commandline/cli/)
- [Dockerfileリファレンス](https://matsuand.github.io/docs.docker.jp.onthefly/engine/reference/builder/)
- [Dockerfile のベストプラクティス](https://docs.docker.jp/engine/articles/dockerfile_best-practice.html)

## 動作環境

### Chocolatey

1. PowerShellを管理者権限で起動（以降の手順はすべてPowerShellで行う）
2. `Get-ExecutionPolicy`を実行
3. `Restricted`が返ってきた場合は、`Set-ExecutionPolicy AllSigned`を実行
4. 下記コマンドを実行

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

詳細は[公式サイト](https://chocolatey.org/install)を確認

### jq

1. PowerShellを管理者権限で起動（以降の手順はすべてPowerShellで行う）
2. `chocolatey install jq`を実行

詳細は[公式サイト](https://stedolan.github.io/jq/download/)を確認

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
|docker container run [イメージ名]|イメージを起動|
|docker container ps|コンテナの状態を確認|
|docker container stats ([コンテナ名])|１つまたは複数のコンテナのリソース使用状況をライブで表示|
|docker stop [コンテナ名]|コンテナを停止|
|docker rm [コンテナ名]|コンテナを削除|
|docker login|Docker Hubへのログイン|
|docker logout|Docker Hubへのログアウト|