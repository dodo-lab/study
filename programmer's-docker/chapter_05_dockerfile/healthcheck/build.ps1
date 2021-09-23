# ビルド
docker build -t healthcheck-nginx .

# 実行
docker run --name=web -dit --rm healthcheck-nginx

# ヘルスチェックが２回実行されるまでスリープ
Start-Sleep 25

# ヘルスチェックの結果は、docker container inspectコマンドで確認
docker inspect --format='{{json .State.Health}}' web | jq

# 後片付け
docker stop web
docker image rm healthcheck-nginx