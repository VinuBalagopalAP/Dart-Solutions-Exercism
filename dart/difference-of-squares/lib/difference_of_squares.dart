class DifferenceOfSquares {
  int squareOfSum(int n) {
    ///  [ Calculate the sum of the first n natural numbers ]
    int sum = (n * (n + 1)) ~/ 2;

    /// [ Return the square of the sum ]
    return sum * sum;
  }

  int sumOfSquares(int n) {
    /// [ Return the sum of the squares of the first n natural numbers ]
    return (n * (n + 1) * (2 * n + 1)) ~/ 6;
  }

  int differenceOfSquares(int n) {
    /// [ Return the difference between the square of the sum and the sum of the squares ]
    return squareOfSum(n) - sumOfSquares(n);
  }
}
