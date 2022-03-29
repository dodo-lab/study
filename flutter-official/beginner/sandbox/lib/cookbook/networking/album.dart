import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart' as http;

const _albumsUri = 'https://jsonplaceholder.typicode.com/albums';

T getSafeMap<T>(Map<String, dynamic> map, String key, T fallback) {
  return map.containsKey(key) ? map[key] : fallback;
}

class Album {
  final int userId;
  final int id;
  final String title;

  const Album({required this.userId, required this.id, required this.title});

  factory Album.fromJson(Map<String, dynamic> json) {
    final userId = getSafeMap(json, 'userId', 0);
    final id = getSafeMap(json, 'id', 0);
    final title = getSafeMap(json, 'title', '');
    return Album(userId: userId, id: id, title: title);
  }
}

Future<Album> fetchAlbum(http.Client client) async {
  final response = await client.get(
    Uri.parse('$_albumsUri/1'),
    headers: {
      HttpHeaders.authorizationHeader: 'Basic api_token',
    },
  );

  if (response.statusCode == 200) {
    return Album.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to load album');
  }
}

Future<Album> deleteAlbum(String id) async {
  final http.Response response = await http.delete(
    Uri.parse('$_albumsUri/$id'),
    headers: <String, String>{
      HttpHeaders.contentTypeHeader: 'application/json; charset=UTF-8',
    },
  );

  if (response.statusCode == 200) {
    return Album.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to delete album.');
  }
}

Future<Album> createAlbum(String title) async {
  final response = await http.post(
    Uri.parse(_albumsUri),
    headers: {
      HttpHeaders.contentTypeHeader: 'application/json; charset=UTF-8',
    },
    body: jsonEncode({
      'title': title,
    }),
  );

  if (response.statusCode == 201) {
    return Album.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to create album.');
  }
}

Future<Album> updateAlbum(String title) async {
  final response = await http.put(
    Uri.parse('$_albumsUri/1'),
    headers: {
      HttpHeaders.contentTypeHeader: 'application/json; charset=UTF-8',
    },
    body: jsonEncode({'title': title}),
  );

  if (response.statusCode == 200) {
    return Album.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to update album.');
  }
}
