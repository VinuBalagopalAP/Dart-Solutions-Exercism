import 'dart:math';

class HighScores {
  final List<int> _scores;

  HighScores(this._scores);

  List<int> get scores => _scores;

  int latest() => _scores.last;

  int personalBest() => _scores.reduce(max);

  List<int> personalTopThree() {
    final topThree = _scores.toList()..sort((a, b) => b - a);

    return topThree.take(3).toList();
  }
}
