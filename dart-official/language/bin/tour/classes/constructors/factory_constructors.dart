class Logger {
  final String name;
  bool mute = false;

  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print('$name: $msg');
  }
}

void main() {
  final logger = Logger('Bob');
  logger.log('Button clicked');

  final logMap = {'name': 'Cat'};
  final loggerJson = Logger.fromJson(logMap);
  loggerJson.log('Scroll window');
}
