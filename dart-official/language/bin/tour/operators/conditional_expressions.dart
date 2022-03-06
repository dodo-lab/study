String playerName(String? name) => name ?? 'Guest';

void main() {
  final p1 = playerName('player1');
  final p2 = playerName(null);

  assert(p1 == 'player1');
  assert(p2 == 'Guest');

  print(p1);
  print(p2);
}
