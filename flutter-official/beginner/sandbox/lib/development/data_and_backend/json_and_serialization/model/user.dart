import 'package:json_annotation/json_annotation.dart';

// これにより、Userクラスは自動生成されたファイル内のプライベートメンバーにアクセスすることが可能.
// 自動生成されるファイルは'*.g.dart'.
part 'user.g.dart';

// このクラスがJSONシリアライゼーションを生成する必要があることを明示するアノテーション.
@JsonSerializable()
class User {
  User(this.name, this.email);

  String name;
  String email;

  // 自動生成された_$UserFromJson関数にJSONデータを渡し、新しいUserインスタンスを生成する.
  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  // 自動生成された_$UserToJson関数でUserインスタンスからJSONへ変換する.
  Map<String, dynamic> toJson() => _$UserToJson(this);
}
