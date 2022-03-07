void main() {
  var command = 'CLOSE';

  switch (command) {
    case 'CLOSE':
      print('CLOSE: $command');
      // nowClosedラベルに飛ばす
      continue nowClosed;
    nowClosed:
    case 'NOW_CLOSED':
      print('NOW_CLOSED: $command');
      break;
    default:
      print('default: $command');
      break;
  }
}
