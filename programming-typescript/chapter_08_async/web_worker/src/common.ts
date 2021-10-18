export type Message = string;
export type ThreadID = number;
export type UserID = number;
export type Participants = UserID[];

export type Commands = {
  sendMessageToThread: [ThreadID, Message];
  createThread: [Participants];
  addUserToThread: [ThreadID, UserID];
  removeUserFromThread: [ThreadID, UserID];
};

export type Events = {
  receivedMessage: [ThreadID, UserID, Message];
  createdThread: [ThreadID, Participants];
  addedUserToThread: [ThreadID, UserID];
  removedUserFromThread: [ThreadID, UserID];
};

export interface SafeEmitter<Events extends Record<PropertyKey, unknown[]>> {
  emit<K extends keyof Events>(channel: K, ...data: Events[K]): boolean;
  on<K extends keyof Events>(
    channel: K,
    listener: (...data: Events[K]) => void
  ): this;
  on(channel: never, listener: (...data: unknown[]) => void): this;
}

type Matrix = number[][];
export type MatrixProtocol = {
  determinant: {
    in: [Matrix];
    out: number;
  };
  'dot-product': {
    in: [Matrix, Matrix];
    out: Matrix;
  };
  invert: {
    in: [Matrix];
    out: Matrix;
  };
};

type Protocol = {
  [command: string]: {
    in: unknown[];
    out: unknown;
  };
};

export function createProtocol<P extends Protocol>(script: string) {
  return <K extends keyof P>(command: K) =>
    (...args: P[K]['in']) =>
      new Promise<P[K]['out']>((resolve, reject) => {
        const worker = new Worker(script);
        worker.onerror = reject;
        worker.onmessage = (event) => resolve(event.data);
        worker.postMessage({ command, args });
      });
}
