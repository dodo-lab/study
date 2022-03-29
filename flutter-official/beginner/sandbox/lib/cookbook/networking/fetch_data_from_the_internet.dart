import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/networking/album.dart';
import 'package:http/http.dart' as http;

class FetchDataFromTheInternet extends StatefulWidget {
  const FetchDataFromTheInternet({Key? key}) : super(key: key);

  @override
  _FetchDataFromTheInternetState createState() =>
      _FetchDataFromTheInternetState();
}

class _FetchDataFromTheInternetState extends State<FetchDataFromTheInternet> {
  late Future<Album> futureAlbum;

  @override
  void initState() {
    super.initState();
    futureAlbum = fetchAlbum(http.Client());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Fetch Data'),
      ),
      body: Center(
        child: FutureBuilder<Album>(
          future: futureAlbum,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return Text(snapshot.data!.title);
            } else if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }

            return const CircularProgressIndicator();
          },
        ),
      ),
    );
  }
}
