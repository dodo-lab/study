#--------------------------------------------------
# デフォルトネットワークでのコンテナ同士の通信

# コンテナ起動
docker run -dit --name busybox1 busybox
docker run -dit --name busybox2 busybox

# IPアドレス出力
docker inspect busybox1 |  Select-String '"IPAddress"'
docker inspect busybox2 |  Select-String '"IPAddress"'

# docker2からdocker1への接続確認（別のPowerShellウィンドウから実行すること）
# デフォルトネットワーク設定では、IPアドレスだと接続可能でコンテナ名は接続不可
# ・IPアドレス接続：docker exec -it busybox2 ping [busybox1のIPアドレス]
# ・コンテナ名接続：docker exec -it busybox2 ping busybox1
Pause

docker stop -t=2 busybox1 busybox2
docker rm busybox1 busybox2

#--------------------------------------------------
# ユーザー定義ネットワークでのコンテナ同士の通信

# ユーザー定義ネットワークの作成
docker network create my_bridge --driver bridge

# 作成したユーザー定義ネットワークを指定し、コンテナを起動
docker run -dit --name busybox1 --net=my_bridge busybox
docker run -dit --name busybox2 --net=my_bridge busybox

# IPアドレス出力
docker inspect busybox1 |  Select-String '"IPAddress"'
docker inspect busybox2 |  Select-String '"IPAddress"'

# docker2からdocker1への接続確認（別のPowerShellウィンドウから実行すること）
# ユーザー定義ネットワークでは、IPアドレスとコンテナ名どちらでも接続可能
# ・IPアドレス接続：docker exec -it busybox2 ping [busybox1のIPアドレス]
# ・コンテナ名接続：docker exec -it busybox2 ping busybox1
Pause

docker stop -t=2 busybox1 busybox2
docker rm busybox1 busybox2
docker network rm my_bridge