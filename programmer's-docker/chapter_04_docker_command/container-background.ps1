# Dockerコンテナのバックグランド実行
# -d : バックグランドで実行
docker container run --name "test1" -d centos /bin/ping localhost

# 2秒スリープ
Start-Sleep 2

# Dockerコンテナのログを確認
# -t : タイムスタンプを表示
docker container logs -t test1

# Dockerコンテナの停止と削除
docker container stop test1
docker container rm test1
