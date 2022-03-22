import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/networking/album.dart';

class UpdateDataOverTheInternet extends StatefulWidget {
  const UpdateDataOverTheInternet({Key? key}) : super(key: key);

  @override
  State<UpdateDataOverTheInternet> createState() =>
      UpdateDataOverTheInternetState();
}

class UpdateDataOverTheInternetState extends State<UpdateDataOverTheInternet> {
  final TextEditingController _controller = TextEditingController();
  late Future<Album> _futureAlbum;

  @override
  void initState() {
    super.initState();
    _futureAlbum = fetchAlbum();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Update data over the internet')),
      body: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.all(8.0),
        child: FutureBuilder<Album>(
          future: _futureAlbum,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              if (snapshot.hasData) {
                return buildUserEdit(snapshot.data!.title);
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }
            }

            return const CircularProgressIndicator();
          },
        ),
      ),
    );
  }

  Column buildUserEdit(String title) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(title),
        TextField(
          controller: _controller,
          decoration: const InputDecoration(hintText: 'Enter Title'),
        ),
        ElevatedButton(
          onPressed: () {
            setState(() {
              _futureAlbum = updateAlbum(_controller.text);
              _controller.text = '';
            });
          },
          child: const Text('Update Data'),
        ),
      ],
    );
  }
}
