import 'dart:convert';
import 'dart:io';

void main() async {
  final url =
      Uri.parse('https://zipcloud.ibsnet.co.jp/api/search?zipcode=2540012');
  final httpClient = HttpClient();
  final request = await httpClient.getUrl(url);
  final response = await request.close();
  final data = await utf8.decoder.bind(response).toList();
  print('Response ${response.statusCode}: $data');
  httpClient.close();
}
