class WordCount {
  Map<String, int> countWords(String word) {
    RegExp regexp = new RegExp(r"\d+|[a-z]+('[a-z])?", caseSensitive: false);
    Map<String, int> result = new Map();

    regexp.allMatches(word).forEach((m) => result
        .update(m.group(0)!.toLowerCase(), (i) => i + 1, ifAbsent: () => 1));
    return result;
  }
}
