# コンテナを生成／起動する環境を指定

# -e : 環境変数を設定
# シェル起動後に、setコマンドで環境変数が設定されていることを確認
docker container run -it --rm -e foo=bar centos /bin/bash

# --env-file : 環境変数をファイルから設定
# シェル起動後に、setコマンドで環境変数が設定されていることを確認
docker container run -it --rm --env-file=env_list centos /bin/bash

# --read-only : コンテナのファイルシステムを読み込み専用にする
# シェル起動後に、touchコマンドで新規ファイルが作成できないことを確認
docker container run -it --rm --read-only=true centos /bin/bash

# -w : コンテナの作業ディレクトリを指定
# シェル起動後に、pwdコマンドで指定ディレクトリが表示されることを確認
docker container run -it --rm -w=/usr/tmp centos /bin/bash
