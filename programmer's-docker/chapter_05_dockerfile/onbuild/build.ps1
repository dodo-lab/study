# ベースイメージのビルド
docker build -t web-base -f Dockerfile.base .

# Webサーバ用イメージのビルド
docker build -t webserver .

# 実行
docker run --name=web -d --rm -p 80:80 webserver

Pause

# 後片付け
docker stop web
docker image rm web-base
docker image rm webserver