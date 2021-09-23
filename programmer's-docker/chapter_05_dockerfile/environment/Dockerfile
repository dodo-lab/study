FROM centos

# 環境変数
ENV MY_NAME="Shiho ASA" \
    MY_ORDER="Gin Whisky Calvados" \
    MY_NICNAME=miya \
    MY_WORKDIR=/usr/tmp/

# Dockerfile内の変数
# Dockerfileのビルド時に、--build-argオプションで上書き可能
ARG YOUR_NAME="asa"
RUN echo $YOUR_NAME

# WORKDIR命令は、下記命令を実行するための作業用ディレクトリを指定する
# もし指定したディレクトリが存在しなければ、新たに作成する
# ENV命令で指定した環境変数を使うことも可能
#
# WORKDIR命令が影響する命令：RUN / CMD / ENTRYPOINT / COPY / ADD
WORKDIR $MY_WORKDIR

# ファイルコピー（WORKDIRで/usr/tmpに移動済を考慮）
COPY exec.sh .

# ユーザーの指定
# イメージ実行や次の命令を実行するためのユーザーを指定する
# RUN / CMD / ENTRYPOINT
#
# 以下の命令だと、１回目のwhoamiがrootユーザー、２回目のwhoamiがasaになる
RUN adduser asa
RUN whoami
USER asa
RUN whoami

# デフォルトシェルの設定
# 指定がない場合のシェルは、Linuxが[bin/sh -c]、Windowsが[cmd /S /C]となる
# 影響を受ける命令は、 RUN / CMD / ENTRYPOINT
SHELL ["/bin/bash", "-c"]
