# Nginxイメージのダウンロード
Write-Output "download nginx"
docker pull nginx

# イメージの確認
Write-Output "ls image"
docker image ls

# Nginxサーバを起動
# -name : コンテナの名前を指定
# -d : デタッチドモードでコンテナを起動する（） [https://docs.docker.jp/engine/reference/run.html#detached-d]
# -p : ホストのポートとコンテナ内部のポートを接続する。左辺がホストのポート、右辺がコンテナ内部のポート。
#      以下の例では`localhost:3000`にアクセスすると、コンテナ内部の80ポートに接続される
Write-Output "run eginx"
docker container run --name webserver -d -p 3000:80 nginx

# Dockerで起動したコンテナの状態を確認
Write-Output "container ps"
docker container ps

# コンテナの詳細を確認
Write-Output "container stats"
docker container stats webserver