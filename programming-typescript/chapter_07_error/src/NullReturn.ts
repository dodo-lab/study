import { askBirthday, isValidDate } from './common';

export default function NullReturn() {
  console.log('[nullを返す]');

  function parse(birthday: string): Date | null {
    const date = new Date(birthday);
    if (!isValidDate(date)) {
      return null;
    }
    return date;
  }

  const date = parse(askBirthday());
  if (date) {
    console.info('Date is', date.toISOString());
  } else {
    console.error('Error parsing date some reason');
  }
}
