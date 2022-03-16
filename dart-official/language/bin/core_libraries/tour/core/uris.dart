final uri = 'https://example.org/api?foo=some message';

void encodingAndDecoding() {
  final encoded = Uri.encodeFull(uri);
  assert(encoded == 'https://example.org/api?foo=some%20message');

  final decoded = Uri.decodeFull(encoded);
  assert(decoded == uri);
}

void main() {
  encodingAndDecoding();
}
