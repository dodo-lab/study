type HTMLElement = string;
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

// ジェネリック型のデフォルトの型
type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
  target: Target;
  type: Type;
};

const myEvent2Func = (myEvent: MyEvent2<string>) => {};
