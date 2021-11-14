type Callback = () => void;

export function doAsync(...callbacks: Callback[]) {
  const promises: Promise<void>[] = [];

  for (const cb of callbacks) {
    promises.push(
      new Promise<void>((resolve) => {
        setTimeout(() => {
          cb();
          resolve();
        }, 10);
      })
    );
  }

  return Promise.all(promises);
}
