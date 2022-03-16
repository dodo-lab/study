final uri = 'https://example.org/api?foo=some message';

void encodingAndDecodingFullyQualifiedURIs() {
  final encoded = Uri.encodeFull(uri);
  assert(encoded == 'https://example.org/api?foo=some%20message');

  final decoded = Uri.decodeFull(encoded);
  assert(decoded == uri);
}

void encodingAndDecodingURIComponents() {
  final encoded = Uri.encodeComponent(uri);
  assert(encoded == 'https%3A%2F%2Fexample.org%2Fapi%3Ffoo%3Dsome%20message');

  final decoded = Uri.decodeComponent(encoded);
  assert(decoded == uri);
}

void main() {
  encodingAndDecodingFullyQualifiedURIs();
  encodingAndDecodingURIComponents();
}
