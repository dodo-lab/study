FROM busybox

# ENTRYPOINT命令でコマンド、CMD命令でオプションを指定する形なら両立可能
ENTRYPOINT [ "ping" ]
CMD [ "127.0.0.1", "-c", "100" ]