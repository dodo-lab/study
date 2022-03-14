class HttpResponse {
  final int code;
  final String? error;

  HttpResponse.ok()
      : code = 200,
        error = null;
  HttpResponse.notFound()
      : code = 404,
        error = 'Not found';

  @override
  String toString() {
    if (code == 200) return 'OK';

    // 'code'が200以外なら'error'はnullではないが、コンパイラはそれを検知できない.
    // そのため、次のコードはnullアクセスのコンパイルエラーが出る.
    // return 'ERROR $code ${error.toUpperCase()}';

    // 'postfix exclamation mark（!）'によって、nullableからnon-nullable型に昇格させる.
    return 'ERROR $code ${error!.toUpperCase()}';
  }
}

void main() {
  final ok = HttpResponse.ok();
  final error = HttpResponse.notFound();

  print('ok: $ok');
  print('error: $error');
}
