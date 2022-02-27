// named parameters
void enableFlags({bool bold = false, required bool hidden}) {
  print('bold is $bold');
  print('hidden is $hidden');
}

// optional parameters
String say(String from, String msg, [String? device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }

  return result;
}

void doStuff(
    {List<int> list = const [1, 2, 3],
    Map<String, String> gifts = const {
      'first': 'paper',
      'second': 'cotton',
      'third': 'Leather',
    }}) {
  print('list: $list');
  print('gifts: $gifts');
}

void main() {
  enableFlags(hidden: true, bold: false);
  print(say('Bob', 'Howdy'));
  print(say('from', 'Howdy', 'smoke signal'));
  doStuff();
  doStuff(list: const [4, 5, 6]);
}
