import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:test/test.dart';
import 'package:http/http.dart' as http;
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:sandbox/cookbook/networking/album.dart';

import 'fetch_album_test.mocks.dart';

final uri = Uri.parse('https://jsonplaceholder.typicode.com/albums/1');
final headers = <String, String>{
  HttpHeaders.authorizationHeader: 'Basic api_token',
};

@GenerateMocks([http.Client])
void main() {
  group('fetchAlbum', () {
    test('returns an Album if the http call completes successfully', () async {
      final client = MockClient();

      when(client.get(uri, headers: headers)).thenAnswer(
        (_) async =>
            http.Response('{"userId": 1, "id": 2, "title": "mock"}', 200),
      );

      expect(await fetchAlbum(client), isA<Album>());
    });

    test('throws an exception if the http call completes with an error', () {
      final client = MockClient();

      when(client.get(uri, headers: headers))
          .thenAnswer((_) async => http.Response('Not Found', 404));

      expect(fetchAlbum(client), throwsException);
    });
  });
}
