export function forEach<T>(items: T[], callback: (T) => T) {
  for (const item of items) {
    callback(item);
  }
}
