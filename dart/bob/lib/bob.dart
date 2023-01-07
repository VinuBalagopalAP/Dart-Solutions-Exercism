class Bob {
  // Put your code here
  String response(String input) {
    String string = input.replaceAll(r"\'", "");
    if (string.trim().isEmpty) {
      return 'Fine. Be that way!';
    } else if (input.toUpperCase() == input && input.toLowerCase() != input) {
      return 'Whoa, chill out!';
    } else if (input.endsWith('?')) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  }
}
