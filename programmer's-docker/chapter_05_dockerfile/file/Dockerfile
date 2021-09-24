FROM busybox

# ADD命令は、ホスト上のファイル／ディレクトリやリモートファイルを、Dockerイメージ内にコピーする（ファイルコピーは基本的にCOPY命令を使うべき）
# ホストのファイルパスには、ワイルドカードとGo言語のfilepath.Matchルールに一致するパターンが使える
# ホストのファイルがtarアーカイブや圧縮フォーマットの場合、指定したDockerイメージ内で解凍される
ADD test.sh /docker_dir/
ADD http://www.wings.msn.to/index.php /docker_dir/web/
ADD website.tar /docker_dir/website/

# 他のパターン
# ADD hos* /docker_dir/
# ADD hos?.txt /docker_dir/

# ボリュームのマウント
# VOLUME [ "/マウントポイント" ]