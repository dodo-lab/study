# リソースを指定してコンテナを生成／実行

# --cpu-shares : CPU時間の相対比率を指定。デフォルトは1024のため、512だと半分のCPU時間を割り当てる。
# --memory : メモリの使用量を指定
docker container run --name os1 -d --cpu-shares=512 --memory=1g centos

# -v : ホストOSとコンテナのディレクトリの共有
docker container run --name webserver1 -d -v /run/desktop/mnt/host/c/Home/program/study/html-css-getting-start/chapter-07:/usr/share/nginx/html -p 3000:80 nginx

Pause

# 後片付け
docker stop os1 webserver1
docker rm os1 webserver1