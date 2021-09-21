# コンテナのネットワーク設定

# コンテナのポート番号とホストOSのポート番号のマッピング
docker container run --name webserver1 -d -p 8080:80 nginx

# コンテナのDNSサーバ指定
docker container run --name webserver2 -d --dns 192.168.1.1 nginx

# コンテナのMACアドレス指定
docker container run --name os1 -d --mac-address="92:d0:c6:0a:29:33" centos
docker container inspect --format="{{ .Config.MacAddress }}" os1

# コンテナにホスト名とIPアドレスを指定
docker container run --name os2 -d --add-host test.com:192.168.1.1 centos

Pause

# 後片付け
docker stop webserver1
docker stop webserver2
docker stop os1
docker stop os2
docker rm webserver1
docker rm webserver2
docker rm os1
docker rm os2

