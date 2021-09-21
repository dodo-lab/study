# Dockerコンテナ生成と起動（カレンダー表示）
docker container run -it --name "test1" centos /bin/cal

# Dockerコンテナ生成と起動（シェル起動）
docker container run -it --name "test2" centos /bin/bash

# Dockerコンテナ生成と起動と削除（カレンダー表示）
docker container run -it --name "test3" --rm centos /bin/cal

# 実行中のDockerコンテナを表示
docker container ls

# すべてのDockerコンテナを表示
docker container ls -a

# 上記で生成したDockerコンテナの削除（test3は --rm を指定しているので、削除済）
docker container rm test1
docker container rm test2

# すべてのDockerコンテナを表示
docker container ls -a