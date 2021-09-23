# ベースイメージの設定
FROM ubuntu:latest

# Nginxのインストール
RUN apt-get update && apt-get install -y -q nginx

# ファイルのコピー
COPY index.html /usr/share/nginx/html/
COPY index.html /var/www/html/

# コンテナ実行じに Nginx を起動させる
CMD [ "nginx", "-g", "daemon off;" ]