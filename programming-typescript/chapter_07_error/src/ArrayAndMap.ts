import { prompt, isValidDate } from './common';

export default function ArrayAndMap() {
  console.log('[配列とマップ]');

  function parse(birthday: string): Date[] {
    const date = new Date(birthday);
    if (!isValidDate(date)) {
      return [];
    }
    return [date];
  }

  function ask(): string[] {
    const result = prompt('When is your birthday?');
    if (result === null) {
      return [];
    }
    return [result];
  }

  ask()
    .flatMap(parse)
    .map((date) => date.toISOString())
    .forEach((date) => console.info('Date is', date));
}
