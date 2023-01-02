class ArmstrongNumbers {
  // Put your code here
  bool isArmstrongNumber(String numString) {
    return int.parse(numString) ==
        numString.split('').fold(
            0,
            (sum, digit) =>
                sum + int.parse(digit) * int.parse(digit) * int.parse(digit));
  }
}
