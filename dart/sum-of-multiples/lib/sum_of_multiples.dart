class SumOfMultiples {
  int sum(List<int> multiples, int n) {
    return Iterable<int>.generate(n, (i) => i)
        .where((i) => multiples.any((m) => i % m == 0))
        .reduce((a, b) => a + b);
  }
}
