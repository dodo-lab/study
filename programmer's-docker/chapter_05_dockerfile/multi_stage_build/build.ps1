# ビルド
docker build -t greet .

# イメージ一覧
docker image ls

# 実行
docker run -it --rm greet asa
docker run -it --rm greet --lang=es asa

# 後片付け
docker image rm greet