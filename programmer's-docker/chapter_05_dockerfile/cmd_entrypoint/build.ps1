#------------------------------------------------------
# CMD 命令
docker build -t cmd-image -f cmd.dockerfile .

# CMDは実行時にコマンドを上書きすることが可能
docker run --name=cmd --rm -dit cmd-image ping 127.0.0.1 -c 200
docker exec -it cmd ps auxf

docker stop -t=2 cmd
docker image rm cmd-image

#------------------------------------------------------
# ENTRYPOINT 命令
docker build -t entrypoint-image -f entryPoint.dockerfile .

# ENTRYPOINTは上書き不可
docker run --name=entrypoint --rm -dit entrypoint-image
docker exec -it entrypoint ps auxf

docker stop -t=2 entrypoint
docker image rm entrypoint-image

#------------------------------------------------------
# CMD / ENTRYPOINT 命令
docker build -t cmd-entrypoint-image -f cmdEntryPoint.dockerfile .

# 実行時にオプションを指定しなければ、DockerfileのCMD命令のオプションが使われる
docker run --name=cmd-entrypoint --rm -dit cmd-entrypoint-image "127.0.0.1", "-c", "200"
docker exec -it cmd-entrypoint ps auxf

docker stop -t=2 cmd-entrypoint
docker image rm cmd-entrypoint-image