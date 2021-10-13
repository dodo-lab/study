export default function Decorator() {
  console.log('[デコレータ]');

  type ClassConstructor<T> = new (...args: any[]) => T;

  function serializable<T extends ClassConstructor<{ getValue(): Payload }>>(
    Constructor: T
  ) {
    return class extends Constructor {
      serialize() {
        return this.getValue().toString();
      }
    };
  }

  class Payload {
    toString() {
      return 'Payload::toString';
    }
  }

  class APIPayload {
    getValue(): Payload {
      return new Payload();
    }
  }

  const DecoratedAPIPayload = serializable(APIPayload);
  const payload = new DecoratedAPIPayload();
  console.log(payload.serialize());
}
