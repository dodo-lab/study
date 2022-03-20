import 'dart:convert';

void decode() {
  final jsonString = '''
    [
      {"score": 40},
      {"score": 80}
    ]
  ''';

  final scores = jsonDecode(jsonString);
  assert(scores is List);

  final firstScore = scores[0];
  assert(firstScore is Map);
  assert(firstScore['score'] == 40);
}

void encode() {
  final scores = [
    {'score': 40},
    {'score': 80},
    {'score': 100, 'overtime': true, 'special_guest': null},
  ];

  final jsonText = jsonEncode(scores);
  assert(jsonText ==
      '[{"score":40},{"score":80},'
          '{"score":100,"overtime":true,'
          '"special_guest":null}]');
}

void main() {
  decode();
  encode();
}
