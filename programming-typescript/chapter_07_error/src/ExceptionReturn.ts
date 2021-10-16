import { askBirthday, isValidDate } from './common';

export default function ExceptionReturn() {
  console.log('[例外を返す]]');

  // カスタムエラー型
  class InvalidDateFormatError extends RangeError {}
  class DateIsInTheFutureError extends RangeError {}

  function parse(
    birthday: string
  ): Date | InvalidDateFormatError | DateIsInTheFutureError {
    const date = new Date(birthday);
    if (!isValidDate(date)) {
      return new InvalidDateFormatError('Enter a date in the from YYYY/MM/DD');
    }
    if (date.getTime() > Date.now()) {
      return new DateIsInTheFutureError('Are you a timelord?');
    }
    return date;
  }

  const date = parse(askBirthday());
  if (date instanceof InvalidDateFormatError) {
    console.error(date.message);
  } else if (date instanceof DateIsInTheFutureError) {
    console.info(date.message);
  } else {
    console.info('Date is', date.toISOString());
  }
}
