import { readFile } from 'fs';

export default function Promise() {
  console.log('[Promise]');

  type Executor<T> = (
    resolve: (result: T) => void,
    reject: (error: unknown) => void
  ) => void;

  class Promise<T> {
    private result: T | null = null;
    private error: unknown = null;

    constructor(f: Executor<T>) {
      setTimeout(() => {
        f(this.resolve.bind(this), this.reject.bind(this));
      }, 1);
    }

    resolve(result: T) {
      this.result = result;
    }

    reject(error: unknown) {
      if (error) {
        this.error = error;
      } else {
        this.error = new Error('unknown error');
      }
    }

    then<U>(g: (result: T) => Promise<U> | U): Promise<U> {
      return new Promise((resolve) => {
        const exec = () => {
          if (this.error) return;
          if (this.result) {
            const nextValue = g(this.result);
            if (nextValue instanceof Promise) {
              nextValue.then((result) => resolve(result));
            } else {
              resolve(nextValue);
            }

            return;
          }

          setTimeout(exec, 10);
        };

        exec();
      });
    }
  }

  function readFilePromise(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
      readFile(path, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.toString());
        }
      });
    });
  }

  new Promise((resolve) => {
    setTimeout(() => resolve('test1'), 1000);
  })
    .then((data) => {
      console.log(data);
      return new Promise((resolve) => {
        setTimeout(() => resolve('test2'), 1000);
      });
    })
    .then((data) => {
      console.log(data);
    });
}
