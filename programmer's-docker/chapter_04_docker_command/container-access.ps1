#-----------------------------------------------------
# 稼働中へのコンテナに接続

docker run --name=os -dit centos /bin/bash

# 接続
docker attach os

docker stop os
docker rm os

#-----------------------------------------------------
# 稼働中のコンテナでプロセス実行

docker run --name=os -dit centos

# プロセス実行（bin/bashを実行）
docker exec -it os /bin/bash

docker stop os
docker rm os