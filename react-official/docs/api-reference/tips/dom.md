# DOM 要素

## [属性についての差異](https://ja.reactjs.org/docs/dom-elements.html#differences-in-attributes)

### checked

インプットタイプが`checkbox`または`radio`の`<input>`要素でサポートされている。

### className

CSS クラスを指定する。`class`は JavaScript の予約語のため、使えない。

### htmlFor

`<label>`要素の `for` 属性。`for`は JavaScript の予約語のため、使えない。

### onChange

フォームフィールドに変更があるたびに、このイベントが発生する。

### style

CSS 文字列ではなく、キャメルケースのプロパティを持った JavaScript オブジェクトを受け取る。

### value

`<input>`、`<select>`、`<textarea>`要素でサポートされている。要素の値を設定することに使用できる。
