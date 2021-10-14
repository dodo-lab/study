// CSSの文字列を値および単位に解析する
export default function TypeRefinement() {
  console.log('[型の絞り込み]');

  // 文字列リテラルの合併型を使って、CSSが取り得る値を表現
  type Unit = 'cm' | 'px' | '%';
  // 単位を列挙
  const units: Unit[] = ['cm', 'px', '%'];
  // 各単位をチェックし、一致する単位を返す。一致するものがなければnullを返す。
  function parseUnit(value: string): Unit | null {
    for (const unit of units) {
      if (value.endsWith(unit)) {
        return unit;
      }
    }
    return null;
  }

  type Width = {
    unit: Unit;
    value: number;
  };

  function parseWidth(width: number | string | null | undefined): Width | null {
    // nullとundefinedのチェック
    if (width == null) {
      return null;
    }

    // この時点で、widthはnumberとstringに絞り込まれている
    // widthがnumber型なら、pxをデフォルトの単位とする
    if (typeof width === 'number') {
      return { unit: 'px', value: width };
    }

    // この時点で、widthはstringのみに絞り込まれている
    // widthから単位を解析
    const unit = parseUnit(width);
    if (unit) {
      return { unit, value: parseFloat(width) };
    }

    return null;
  }

  console.log(parseWidth(null));
  console.log(parseWidth(undefined));
  console.log(parseWidth(128));
  console.log(parseWidth('128%'));
}
