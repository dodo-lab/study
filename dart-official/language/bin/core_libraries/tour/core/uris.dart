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

void parsingURIs() {
  final uri = Uri.parse('https://example.org:8080/foo/bar#frag');

  assert(uri.scheme == 'https');
  assert(uri.host == 'example.org');
  assert(uri.port == 8080);
  assert(uri.path == '/foo/bar');
  assert(uri.fragment == 'frag');
  assert(uri.origin == 'https://example.org:8080');
}

void buildingURIs() {
  final uri = Uri(
    scheme: 'https',
    host: 'example.org',
    port: 8080,
    path: '/foo/bar',
    fragment: 'frag',
  );
  assert(uri.toString() == 'https://example.org:8080/foo/bar#frag');
}

void main() {
  encodingAndDecodingFullyQualifiedURIs();
  encodingAndDecodingURIComponents();
  parsingURIs();
  buildingURIs();
}
