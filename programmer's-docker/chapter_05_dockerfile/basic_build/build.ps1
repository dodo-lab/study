# Dockerfileのビルド
# docker build -t [生成するイメージ名]:タグ名 Dockerfileのパス
docker build -t ubuntu_nginx:1.0 ./

docker run --name=web --rm -dit -p 3000:80 ubuntu_nginx:1.0

Pause

docker stop -t=2 web
docker image rm ubuntu_nginx:1.0