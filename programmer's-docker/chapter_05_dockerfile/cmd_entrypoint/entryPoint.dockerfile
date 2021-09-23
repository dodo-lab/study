FROM busybox

ENTRYPOINT [ "ping", "127.0.0.1", "-c", "50" ]