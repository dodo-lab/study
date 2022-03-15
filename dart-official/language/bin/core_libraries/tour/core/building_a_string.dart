void main() {
  final sb = StringBuffer()
    ..write('Use a StringBuffer for ')
    ..writeAll(['efficient', 'string', 'creation'], ' ')
    ..write('.');

  final fullString = sb.toString();
  assert(fullString == 'Use a StringBuffer for efficient string creation.');
  print(fullString);
}
