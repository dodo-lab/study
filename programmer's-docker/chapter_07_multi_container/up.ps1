# docker-composeで設定したコンテナをバックグラウンド起動
#---------------------------------------------------------
docker-compose -f ./docker/docker-compose.yml up -d --build

docker exec -it centos /tmp/volume_readwrite/test.sh

# 後片付け
docker stop webserver centos
docker rm webserver centos
docker image rm my-centos
