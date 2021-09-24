# ビルド
docker build -t work-image .

# 実行
docker run --name=work -dit --rm work-image

# コピーされたファイルの確認
docker exec -it work find /docker_dir/

# 後片付け
docker stop -t=2 work
docker image rm work-image