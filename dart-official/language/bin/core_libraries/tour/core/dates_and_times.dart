void dateTime() {
  // Get the current date and time.
  final now = DateTime.now();
  print(now);

  // Create a new DateTime with the local time zone.
  print(DateTime(2000));

  // Specify the month and day.
  print(DateTime(2000, 1, 2));

  // Specify the date as a UTC time.
  print(DateTime.utc(2000));

  // Specify a date and time in ms since the Unix epoch.
  print(DateTime.fromMillisecondsSinceEpoch(946684801000, isUtc: true));

  // Parse on ISO 8601 date.
  print(DateTime.parse('2000-01-01T00:00:02Z'));
}

void millSecondsSinceEpoch() {
  final y2k = DateTime.utc(2000);
  assert(y2k.millisecondsSinceEpoch == 946684800000);

  final unixEpoch = DateTime.utc(1970);
  assert(unixEpoch.millisecondsSinceEpoch == 0);
}

void useDuration() {
  final y2k = DateTime.utc(2000);

  // Add one year.
  final y2001 = y2k.add(const Duration(days: 366));
  assert(y2001.year == 2001);

  // Subtract 30 days.
  final december2000 = y2001.subtract(const Duration(days: 30));
  assert(december2000.year == 2000);
  assert(december2000.month == 12);

  // Calculate the difference between two date.
  final duration = y2001.difference(y2k);
  assert(duration.inDays == 366);
}

void main() {
  dateTime();
  millSecondsSinceEpoch();
  useDuration();
}
