import 'dart:convert';

import 'package:http/http.dart' as http;

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

Future<Album> fetchAlbum() async {
  final response = await http
      .get(Uri.parse('https://jsonplaceholder.typicode.com/albums/1'));

  if (response.statusCode == 200) {
    return Album.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to load album');
  }
}

Future<Album> deleteAlbum(String id) async {
  final http.Response response = await http.delete(
    Uri.parse('https://jsonplaceholder.typicode.com/albums/$id'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );

  if (response.statusCode == 200) {
    return Album.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to delete album.');
  }
}
