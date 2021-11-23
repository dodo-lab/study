# Security | React Native Docs

## [機密情報の保存](https://reactnative.dev/docs/security#storing-sensitive-info)

API キーなどの機密性の高い情報をアプリのコードに保存すべきではない。コードに含まれる情報は、プレーンテキストでアクセスできる可能性があるため。また、永続化されたユーザデータについては、その機密性に基づいて適切なストレージを選択する。

### Async Storage

[Async Storage](https://github.com/react-native-async-storage/async-storage) は、非同期で`暗号化されていない` key-value ストアを提供する、React Native コミュニティのモジュール。Async Storage に保存されたデータはアプリ間で共有されない。つまり、すべてのアプリは独自のサンドボックス環境を持ち、他のアプリのデータにアクセスすることができない。Web でいうところの、ローカルストレージに相当する。

Async Storage の使用に適したケースは以下の通り。

- アプリの実行中に機密性のないデータを保存する場合
- Redux の状態を保存する場合
- GraphQL の状態を保存する場合
- アプリ全体のグローバル変数を保存する場合

### 安全なストレージ

React Native には、機密データを保存する方法が備わっていない。ただし、Android と iOS のプラットフォームとしては提供されている。

- iOS - Keychain Services

  機密情報を安全に保存することができる。証明書／トークン／パスワード／その他機密情報を保存するための理想的な場所。

- Android - Secure Shared Preferences

  永続的な kay-value ストア。`Shared Preferences`のデータはデフォルトでは暗号化されていないが、`Encrypted Shared Preferences`は、`Shared Preferences`をラップし、キーと値を自動的に暗号化する。

- Android - Keystore

  暗号鍵をコンテナに格納し、デバイスからの取り出しを困難にすることが可能。

上述の`Keychain Services`や`Secure Shared Preferences`を利用するには、独自にブリッジコードを書くか、それらをラップしたライブラリを使う。主なライブラリは以下の通り。

- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage)

## [ディープリンク](https://reactnative.dev/docs/security#authentication-and-deep-linking)

モバイルアプリには Web にはない独特の脆弱性（ディープリンク）がある。ディープリンクとは、外部のソースからアプリに対して直接データを送信する方法。ディープリンクのスキーマは`app://xxxx`のようになる。

例えば EC アプリの場合、`app://products/1`でディープリンクを送信すると、id が 1 の商品詳細ページを開くといったことができる。これは、Web 上の URL のようなものと考えることもできるが、重要な違いがある。それは、Web と比較して安全ではないこと。そのため、機密情報をディープリンクで送信すべきでない。

ディープリンクが安全でない理由は、URL スキームを登録する中央管理の方法がないため。アプリ開発者は、[iOS なら Xcode で設定](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app)し、[Android ならインテントを追加](https://developer.android.com/training/app-links/deep-linking) することで、ほぼすべての URL スキームを使用することが可能。そのため、もし悪意のあるアプリが同じスキームを登録してディープリンクをハイジャックすると、リンクに含まれるデータにアクセスされることを阻止できない。

例に挙げた、`app://products/1`であれば特に問題ないが、トークン／シークレット／ユーザー情報といった機密情報をディープリンクで送信するのはセキュリティ上の懸念がある。

また、ディープリンクを開く際に OS が 2 つ以上のアプリがあると判断した場合、Android ではユーザにどのアプリで開くか選択を求めるモーダルを表示する。iOS では、OS が自動的(iOS 11 以降は先着順)に選択してしまうため、悪用される可能性が高くなる。[詳細はこちら](https://blog.trendmicro.com/trendlabs-security-intelligence/ios-url-scheme-susceptible-to-hijacking/)を参照。iOS ではディープリンクでなく、[ユニバーサルリンク](https://developer.apple.com/ios/universal-links/)を使うことで、アプリ内のコンテンツへ安全にリンクできる。

## [OAuth2](https://reactnative.dev/docs/security#oauth2-and-redirects)

OAuth2 認証プロトコルは、安全なプロトコルとして非常に人気がある。OpenID Connect プロトコルも OAuth2 に基づいている。OAuth2 において、ユーザはサードパーティ経由で認証を求められる。認証に成功すると、サードパーティは [JWT（JSON Web Token）](https://jwt.io/introduction/) [^1]と交換可能な検証コードを付与して、リクエストしたアプリへリダイレクトする。

Web 上の URL は一意であることが保証されているため、Web 上での上記リダイレクトは安全。しかし、アプリの場合は前項のように URL スキームを登録する中央管理された方法がないため、安全とはいえない。このセキュリティ上の懸念に対処するために、[PKCE（Proof of Key Code Exchange）](https://oauth.net/2/pkce/)という形で追加チェックする必要がある。

PKCE は、OAuth2 の仕様を拡張版。具体的には、認証とトークン交換のリクエストが同じクライアントからのものであることを検証する、セキュリティレイヤーを追加したもの。PKCE は、SHA256 暗号ハッシュアルゴリズムを使用する。SHA256 は以下のような特徴で、あらゆるサイズのテキストやファイルに固有の署名を作成する。

- 入力内容やサイズに関わらず、結果は常に同じ長さ
- 同じ入力に対して、常に同じ結果が得られる
- 一方通行（リバースエンジニアリングで元の入力を特定できない）

PKCE を使用するには、以下２つの値が必要。

1. code_verifier：クライアントが生成した大きなランダム文字列
2. code_challenge：`code_verifier`に SHA256 を適用した結果

最初の`/authorize`リクエスト時に、クライアントは`code_challenge`を送信する。`/authorize`のリクエストが正しく返されると、クライアントは`code_verifier`も送信する。IDP は受け取った`code_verifier`に SHA256 を適用し、最初の`/authorize`リクエストに設定された`code_challenge`と一致するか確認する。そして、一致した場合のみ、アクセストークンを送信する。

これによって、最初の認証フローを起動したアプリだけが検証コードと JWT の交換に成功することが保証される。もし悪意のあるアプリが検証コードにアクセスしたとしても、それだけでは意味がない。

OAuth2 や PKCE に対応したライブラリとして、[react-native-app-auth](https://github.com/FormidableLabs/react-native-app-auth) が挙げられる。ネイティブの [AppAuth-iOS](https://github.com/openid/AppAuth-iOS) と [AppAuth-Android](https://github.com/openid/AppAuth-Android) をラップしている、IDP と通信するための SDK。

[^1]: JWT は Web 上の当事者間で情報を安全に送信するためのオープンスタンダード
