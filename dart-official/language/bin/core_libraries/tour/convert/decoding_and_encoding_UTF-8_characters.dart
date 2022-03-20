import 'dart:convert';

void main() {
  List<int> utf8Bytes = [
    0xE3,
    0x81,
    0x82,
    0xE3,
    0x81,
    0x84,
    0xE3,
    0x81,
    0x86,
    0xE3,
    0x81,
    0x88,
    0xE3,
    0x81,
    0x8A
  ];

  final word = utf8.decode(utf8Bytes);
  assert(word == 'あいうえお');
  print(word);

  List<int> encoded = utf8.encode(word);
  assert(encoded.length == utf8Bytes.length);
  for (int i = 0; i < encoded.length; i++) {
    assert(encoded[i] == utf8Bytes[i]);
  }
}
