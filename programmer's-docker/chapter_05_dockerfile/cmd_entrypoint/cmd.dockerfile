FROM busybox

CMD [ "ping", "127.0.0.1", "-c", "100" ]