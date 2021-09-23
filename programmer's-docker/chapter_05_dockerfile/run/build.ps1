# ビルド
docker build -t run-sample .

# イメージ生成時にどのようなコマンドが実行されたか確認
docker history run-sample

# 後片付け
docker image rm run-sample