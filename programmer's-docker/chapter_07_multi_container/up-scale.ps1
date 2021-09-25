# docker-composeで設定したコンテナをバックグラウンド起動
# --scaleコマンドで複数コンテナを一括生成
#---------------------------------------------------------
docker-compose -f ./docker/docker-compose.yml up -d --build --scale centos=3

docker ps

# 後片付け
docker-compose -f ./docker/docker-compose.yml stop -t 2
docker-compose -f ./docker/docker-compose.yml rm -f
docker image rm my-centos
