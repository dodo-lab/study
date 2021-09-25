# プライベートネットワークにDockerレジストリを立てて、イメージを管理する
#----------------------------------------------------------------------

# registryコンテナの起動
docker run --name=registry --rm -d -p 5000:5000 registry

# ビルド
docker build -t my-busybox .

# プライベートネットワーク内のDockerレジストリにアップロードするには、以下のルールでイメージにタグを付ける必要がある
# docker image tag [ローカルのイメージ名] [アップロードするレジストリのアドレス:ポート番号]/[イメージ名]
docker image tag my-busybox localhost:5000/my-busybox
docker image ls

# イメージのアップロード
docker image push localhost:5000/my-busybox

# アップロードが完了したので、ローカルで作成したイメージは削除しておく
docker image rm localhost:5000/my-busybox
docker image rm my-busybox
docker image ls

# イメージのダウンロード
docker image pull localhost:5000/my-busybox
docker image ls

# 後片付け
docker image rm localhost:5000/my-busybox
docker stop registry