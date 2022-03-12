class WannableFunction {
  String call(String a, String b, String c) => '$a $b $c!';
}

void main() {
  final wf = WannableFunction();
  final out = wf('Hi', 'there', 'gang');
  print(out);
}
