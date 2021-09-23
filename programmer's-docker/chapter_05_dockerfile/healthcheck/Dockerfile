FROM nginx

# 10秒ごとに稼働中のWebサーバのメインページが３秒以内に表示できるかチェック
HEALTHCHECK --interval=10s --timeout=3s CMD curl -f http://localhost/ || exit 1