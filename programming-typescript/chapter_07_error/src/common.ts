const readlineSync = require('readline-sync');

export function prompt(message: string): string {
  const input = readlineSync.question(message);
  return input;
}

export function askBirthday() {
  return prompt('When is your birthday?');
}

export function isValidDate(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}
