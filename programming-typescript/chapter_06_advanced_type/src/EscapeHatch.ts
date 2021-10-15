// これらのアサーションは型安全ではないため、基本的には非推奨
export default function EscapeHatch() {
  console.log('[各種アサーション]');

  // 型アサーション
  {
    function formatInput(input: string) {}
    function getUserInput(): string | number {
      return 'getUserInput';
    }

    const input = getUserInput();

    // inputの型はstring | numberだが、string型であることを主張する
    formatInput(input as string);
  }

  // 非nullアサーション演算子
  {
    type Dialog = {
      option?: {
        id: string;
        message: string;
      };
    };

    function closeDialog(dialog: Dialog) {
      // 'option'はundefinedの可能性があるが、'!'を付与することで定義済であることをTypeScriptに伝え、エラーを回避している
      if (dialog.option!.id) {
        console.log(dialog.option!.message);
      }
    }
  }

  // 明確な割り当てアサーション
  {
    let userId!: string;

    // 本来は値を割り当てる前に変数が使用されていると判断されてエラーになるが、
    // 上記の'!'によって、明示的に値が割り当てられていることをTypeScriptに伝えることでエラーを回避している
    userId.toUpperCase();

    function fetchUser() {
      userId = 'user-001';
    }
  }
}
