import '../string_apis.dart';
import '../string_apis_2.dart';

void main() {
  final n1 = NumberParsing('48').parseInt();
  final n2 = NumberParsing2('96').parseInt();
  assert(n1 == 48);
  assert(n2 == 96);
}
