import { readFile } from 'fs';

export default function Training() {
  function promisify<T, A>(
    f: (arg: A, f: (error: unknown, result: T | null) => void) => void
  ): (arg: A) => Promise<T> {
    return (arg: A) =>
      new Promise<T>((resolve, reject) =>
        f(arg, (error, result) => {
          if (error) {
            return reject(error);
          }
          if (result === null) {
            return reject(null);
          }
          resolve(result);
        })
      );
  }

  const readFilePromise = promisify(readFile);
  readFilePromise('tslint.json').then((result) =>
    console.log(result.toString())
  );
}
