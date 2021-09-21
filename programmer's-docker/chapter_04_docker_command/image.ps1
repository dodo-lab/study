# イメージの詳細表示
docker image inspect nginx

# イメージの詳細表示(OS / ContainerConfig.Imageに絞る)
docker image inspect --format="{{ .Os}}" nginx
docker image inspect --format="{{ .ContainerConfig.Image}}" nginx

# イメージを検索する
docker search nginx
# イメージを検索する（検索結果の上限指定）
docker search --limit=2 nginx