class DifferenceOfSquares {
  int squareOfSum(int n) {
    return (n * (n + 1) / 2) * (n * (n + 1) / 2) as int;
  }

  int sumOfSquares(int n) {
    return n * (n + 1) * (2 * n + 1) / 6 as int;
  }

  int differenceOfSquares(int n) {
    return squareOfSum(n) - sumOfSquares(n);
  }
}
