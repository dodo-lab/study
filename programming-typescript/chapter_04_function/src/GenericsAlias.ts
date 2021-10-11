type HTMLButtonElement = string;

type MyEvent<T> = {
  target: T;
  type: string;
};

type ButtonEvent = MyEvent<HTMLButtonElement>;

type TimedEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};

function triggerEvent<T>(event: MyEvent<T>): void {}
