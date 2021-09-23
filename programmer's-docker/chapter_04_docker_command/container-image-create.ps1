#------------------------------------------------------------
# コンテナからイメージを作成

# 起動
docker run --name=my_busybox -dit busybox

# ファイル追加
docker exec -it my_busybox /bin/touch /tmp/test

# 停止
docker stop -t=2 my_busybox

# コンテナが生成されてからの差分を表示
docker diff my_busybox

# イメージの作成（[DockerHubのユーザー名]/[イメージ名]:[タグ名]）
docker commit my_busybox hoge/my_busybox_image:1.0

# イメージ一覧
docker image ls

# 作成したイメージを確認（testが表示されたらOK）
docker run -dit --name=my_busybox2 hoge/my_busybox_image:1.0
docker exec -it my_busybox2 /bin/ls /tmp

# tarファイル出力
docker export -o ./my_busybox.tar my_busybox

# 後片付け
docker stop -t=2 my_busybox my_busybox2
docker rm my_busybox my_busybox2
docker image rm hoge/my_busybox_image:1.0