# docker-composeで設定したコンテナをバックグラウンド起動
#---------------------------------------------------------
docker-compose -f ./docker/docker-compose.yml up -d --build

docker exec -it docker_centos_1 /tmp/volume_readwrite/test.sh

# 後片付け
docker stop webserver docker_centos_1
docker rm webserver docker_centos_1
docker image rm my-centos