# Chapter 04 Tips

## Tips

### Dockerイメージのなりすましや、改ざんを防ぐ

`Docker Content Trust（DCT）`という機能を使うと、以下の署名と検証によってDockerイメージの正当性を確認できる。またDCT機能を使うには、設定が必要となる。
詳細は[公式サイト](https://matsuand.github.io/docs.docker.jp.onthefly/engine/security/trust/)を参照。

#### 署名

イメージ作成者がDockerレジストリにイメージをアップロード(docker image push)する前に、ローカル環境でイメージ作成者の秘密鍵を使ってイメージに署名する。
この鍵はセキュリティ上非常に重要な鍵になるため、厳重に管理する必要がある。

#### 検証

署名されたイメージをダウンロード(docker image pull)する時に、イメージ作成者の公開鍵を使って、イメージが本物かどうか確認する。
もし改ざんされている場合は、そのイメージを無効化する。

#### DCTの設定

```shell
# DCT機能の有効化
export DOCKER_CONTENT_TRUST=1

# DCT機能の無効化
export DOCKER_CONTENT_TRUST=0
```

※DCT機能の有効にした状態で、署名が付いてないイメージを使うとエラーになる
