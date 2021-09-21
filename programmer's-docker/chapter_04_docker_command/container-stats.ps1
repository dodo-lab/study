# コンテナの稼働状態確認

# 起動
docker container run -d --name ws1 -p 3000:80 nginx

# 稼働状態確認
docker container stats ws1

# 後片付け
docker stop ws1
docker rm ws1