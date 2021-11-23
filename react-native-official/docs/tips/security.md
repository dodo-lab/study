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
