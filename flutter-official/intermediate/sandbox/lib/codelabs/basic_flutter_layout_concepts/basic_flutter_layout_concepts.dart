import 'package:flutter/material.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/axis_size_and_alignment.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/business_card.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/expanded_widget.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/flexible_widget.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/row_and_column_classes.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/sized_box_widget.dart';
import 'package:sandbox/codelabs/basic_flutter_layout_concepts/spacer_widget.dart';
import 'package:sandbox/widgets/navigation_menu.dart';

class BasicFlutterLayoutConcepts extends StatelessWidget {
  const BasicFlutterLayoutConcepts({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const NavigationMenu(
      title: 'BasicFlutterLayoutConcepts',
      widgets: [
        RowAndColumnClasses(),
        AxisSizeAndAlignment(),
        FlexibleWidget(),
        ExpandedWidget(),
        SizedBoxWidget(),
        SpacerWidget(),
        BusinessCard(),
      ],
    );
  }
}
