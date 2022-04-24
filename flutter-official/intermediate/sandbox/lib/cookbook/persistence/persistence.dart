import 'package:flutter/material.dart';
import 'package:sandbox/cookbook/persistence/read_and_write_files.dart';
import 'package:sandbox/cookbook/persistence/store_key_value_data_on_disk.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class Persistence extends StatelessWidget {
  const Persistence({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'Persistence',
      widgets: [
        ReadAndWriteFiles(),
        StoreKeyValueDataOnDisk(),
      ],
    );
  }
}
