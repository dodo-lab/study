void main() {
  final gifts = {'first': 'partridge'};
  gifts['second'] = 'turtledoves';

  assert(gifts['first'] == 'partridge');
  assert(gifts['fifth'] == null);
  assert(gifts.length == 2);
  print(gifts);

  final gifts2 = {
    ...gifts,
    'second': 'override',
    'third': 'third_value',
  };
  print(gifts2);
}
