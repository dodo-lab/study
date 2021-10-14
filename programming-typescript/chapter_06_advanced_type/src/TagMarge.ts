export default function TagMarge() {
  console.log('[タグ付き合併型]');

  // typeofで判定している場合は、判定した変数のみ絞り込まれる
  {
    type UserTextEvent = { value: string; target: string };
    type UserMouseEvent = { value: [number, number]; target: number };
    type UserEvent = UserTextEvent | UserMouseEvent;

    function handle(event: UserEvent) {
      if (typeof event.value === 'string') {
        const v = event.value; // string
        const t = event.target; // ★string | number
        return;
      }
      const v = event.value; // [number, number]
      const t = event.target; // ★string | number
    }
  }

  // ユニークなタグを付けることで、他の変数も絞り込むことが可能
  {
    type UserTextEvent = { type: 'TextEvent'; value: string; target: string };
    type UserMouseEvent = {
      type: 'MouseEvent';
      value: [number, number];
      target: number;
    };
    type UserEvent = UserTextEvent | UserMouseEvent;

    function handle(event: UserEvent) {
      if (event.type === 'TextEvent') {
        const v = event.value; // string
        const t = event.target; // string
        return;
      }
      const v = event.value; // [number, number]
      const t = event.target; // number
    }
  }
}
