import { askBirthday, isValidDate } from './common';

export default function ExceptionThrow() {
  console.log('[例外をスローする]');

  // カスタムエラー型
  class InvalidDateFormatError extends RangeError {}
  class DateIsInTheFutureError extends RangeError {}

  function parse(birthday: string): Date {
    const date = new Date(birthday);
    if (!isValidDate(date)) {
      throw new InvalidDateFormatError('Enter a date in the from YYYY/MM/DD');
    }
    if (date.getTime() > Date.now()) {
      throw new DateIsInTheFutureError('Are you a timelord?');
    }
    return date;
  }

  try {
    const date = parse(askBirthday());
    console.info('Date is', date.toISOString());
  } catch (e) {
    if (e instanceof InvalidDateFormatError) {
      console.error(e.message);
    } else if (e instanceof DateIsInTheFutureError) {
      console.info(e.message);
    } else {
      throw e;
    }
  }
}
