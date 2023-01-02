class ArmstrongNumbers {
  // Put your code here
  bool isArmstrongNumber(String numString) {
    int num = int.parse(numString);
    int numLength = numString.length;
    int sum = 0;

    for (int i = 0; i < numLength; i++) {
      int digit = int.parse(numString[i]);
      sum += digit * digit * digit;
    }

    return sum == num;
  }
}
