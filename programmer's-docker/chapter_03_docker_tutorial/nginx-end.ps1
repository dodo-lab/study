# Nginxコンテナの停止
Write-Output "stop nginx"
docker stop webserver

# Nginxコンテナの削除
Write-Output "delete nginx"
docker rm webserver