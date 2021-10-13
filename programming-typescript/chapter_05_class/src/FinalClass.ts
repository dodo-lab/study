export default function FinalClass() {
  console.log('[finalクラスのシミュレート]');

  // コンストラクタをprivate指定すると、そのクラスを拡張することが出来なくなる。
  // ただし、newでインスタンス化することも出来なくなるため、staticのインスタンス生成メソッドを用意する必要がある。
  class MessageStack {
    private constructor(private messages: string[]) {}
    static create(messages: string[]) {
      return new MessageStack(messages);
    }

    push(message: string) {
      this.messages.push(message);
    }
    pop() {
      return this.messages.pop();
    }
  }

  const stack = MessageStack.create([]);
  stack.push('1');
  stack.push('2');
  console.log(stack.pop());
  console.log(stack.pop());

  // new はエラー
  // const messageQueue = new MessageQueue([]);
}
