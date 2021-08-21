
■javadoc
　src/main/java フォルダをコマンドプロンプトで開き、
　　javadoc -d .\docs *.java
　を実行する。

　オプションとして、以下がある。
　　-locale
　　-encoding
　　-docencoding
　　-charset


■jar
　・作成
　　jar -jcv JARファイル名 ファイルやフォルダ
　
　・展開
　　jar -xvf JARファイル名
　
　・閲覧
　　jar -tvf JARファイル名


■Ant
　・ビルド／javadoc作成の実行
　　コマンドプロンプトから「ant full_build」を実行
