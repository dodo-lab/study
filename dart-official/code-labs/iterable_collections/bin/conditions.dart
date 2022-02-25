void anyAndEvery(String anyConditions, int everyConditions) {
  const items = ['Salad', 'Popcorn', 'Toast'];

  if (items.any((item) => item.contains(anyConditions))) {
    print('At least one item contains "$anyConditions"');
  } else {
    print('No item contains "$anyConditions"');
  }

  if (items.every((item) => item.length >= everyConditions)) {
    print('All items have length >= $everyConditions');
  } else {
    print('Any items have length < $everyConditions');
  }
}

void main() {
  anyAndEvery('a', 5);
  anyAndEvery('Z', 10);
}
