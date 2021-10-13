export default function Mixin() {
  console.log('[ミックスイン]');

  type ClassConstructor<T> = new (...args: any[]) => T;

  function withEZDebug<C extends ClassConstructor<{ getDebugValue(): object }>>(
    Class: C
  ) {
    return class extends Class {
      constructor(...args: any[]) {
        super(...args);
      }

      debug() {
        const name = this.constructor.name;
        const value = this.getDebugValue();
        return name + '(' + JSON.stringify(value) + ')';
      }
    };
  }

  class HardToDebugUser {
    constructor(
      private id: number,
      private firstName: string,
      private lastName: string
    ) {}

    getDebugValue() {
      return {
        id: this.id,
        name: this.firstName + ' ' + this.lastName,
      };
    }
  }

  const User = withEZDebug(HardToDebugUser);
  const user = new User(3, 'Emma', 'Gluzman');
  console.log(user.debug());
}
