export default function FunctionType() {
  console.log('[関数の型]');

  // 省略記法
  type Log = (message: string, userId?: string) => void;

  // 完全記法
  type Log2 = {
    (message: string, userId?: string): void;
  };
}
