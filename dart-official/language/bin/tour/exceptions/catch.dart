import 'dart:io';

void throwFormatException() => throw FormatException('Format Error');
void throwHttpException() => throw HttpException('BadRequest');
void throwRangeError() => throw RangeError('Out of range');
void throwFileSystemException() =>
    throw FileSystemException('Permission error');

void catchTest(Function throwFunc) {
  try {
    throwFunc();
  } on FormatException {
    print('[catchTest] Catch FormatException');
  } on FileSystemException {
    print('[catchTest] Catch FileSystemException');
    rethrow;
  } on Exception catch (e) {
    print('[catchTest] Catch any exception: $e');
  } catch (e, s) {
    print('[catchTest] Catch unknown error: $e');
    print('[catchTest] Stack trace:\n $s');
  }
}

void main() {
  try {
    catchTest(throwFormatException);
    catchTest(throwHttpException);
    catchTest(throwRangeError);
    catchTest(throwFileSystemException);
  } catch (e, s) {
    print('[main] Catch unknown error: $e');
    print('[main] Stack trace:\n $s');
  }
}
