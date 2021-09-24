# ビルド
docker build -t my-os-image --build-arg YOUR_NAME=oda .

# 実行
docker run --name=my-os -dit --rm my-os-image

# 環境変数の確認
docker exec -it my-os /usr/tmp/exec.sh

# 後片付け
docker stop my-os
docker image rm my-os-image