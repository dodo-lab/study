# コンテナの一覧表示

docker container run -d --name webserver1 -p 3000:80 nginx
docker container run -d --name webserver2 -p 3001:80 nginx

# 稼働中のコンテナを表示
docker container ls

# 停止中も含むすべてのコンテナを表示
docker container ls -a

# コンテナ名でフィルタリング
docker container ls -a -f name=webserver2

# STATUSで終了コードが 0 のコンテナを表示
docker container ls -a -f exited=0

# 出力形式の指定
docker container ls -a --format "{{.Names}}: {{.Status}}"
docker container ls -a --no-trunc --format "table {{.Names}}\t{{.Status}}\t{{.Mounts}}"

docker stop webserver1 webserver2
docker rm webserver1 webserver2