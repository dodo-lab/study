export default function CompanionObjectPattern() {
  console.log('[コンパニオンオブジェクトパターン]');

  type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';

  // Currency型
  type Currency = {
    unit: Unit;
    value: number;
  };

  // Currencyオブジェクト
  const Currency = {
    from(value: number, unit: Unit): Currency {
      return {
        unit,
        value,
      };
    },
  };

  // TypeScriptは型と値(オブジェクト)が別々の名前空間に存在する。
  // そのため、同じスコープ内で型と値の両方に結びつけられた同じ名前を持つことができる。

  // 型として使う
  const amountDue: Currency = {
    unit: 'JPY',
    value: 83733,
  };
  // 値として使う
  const otherAmountDue = Currency.from(330, 'EUR');
}
