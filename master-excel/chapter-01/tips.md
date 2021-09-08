# Chpater-01 Tips

## 日付／時刻

Excelの内部では、日付と時刻は`シリアル値`と呼ばれる数値で管理されている。

### シリアル値

日付のシリアル値は`1900/1/1`を`1`として、1日に1ずつ加算した数値。
例えば、`2021/4/1`のシリアル値は`44287`となる。

時刻のシリアル値は、日付と連動させるために`24時間`を`1`とした少数で表す。
例えば、`6:00`は1日の4分の1のため、シリアル値は`0.25`となる。

また、日付と時刻を組み合わせたデータをシリアル値で表現することが可能。
例えば、`2021/4/1 6:00`のシリアル値は`44287.25`となる。