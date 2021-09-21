# 実行結果によってコンテナを再起動させる

# 終了ステータスが0でないときに n 回再起動する
docker container run --name test1 -it --restart=on-failure:2 centos /bin/bash

# 常に再起動する
docker container run --name test2 -it --restart=always centos /bin/bash

docker container ls -a

# 後片付け
docker stop test1
docker stop test2
docker rm test1
docker rm test2