class Test {
  // late指定があると、'_loadUserName()'は_userNameを使用するタイミングで実行される
  late final String _firstName = _loadUserName('first');

  // late指定がなければ、'_loadUserName()'は即時実行される
  final String _lastName = _loadUserName('last');

  static String _loadUserName(String type) {
    print('exec _loadUserName(\'$type\')');

    if (type == 'first') {
      return 'Taro';
    } else if (type == 'last') {
      return 'Suzuki';
    }

    throw Exception('invalid type: $type');
  }

  void printUserName() {
    print('exec printUserName');
    print('Your name is $_firstName $_lastName');
  }
}

void main() {
  final test = Test();
  print('After generating the test');
  test.printUserName();
}
