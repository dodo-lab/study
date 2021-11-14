/**
 * .toHaveLastReturnedWith(value) は、モック関数が最後に返した値が特定の値かどうかを検証する。
 * もしモック関数の最後の呼び出しで例外が発生した場合、無条件に失敗する。
 */

test('toHaveLastReturnedWith', () => {
  const beverage1 = { name: 'La Croix (Lemon)' };
  const beverage2 = { name: 'La Croix (Orange)' };
  const drink = jest.fn((beverage) => beverage.name);

  drink(beverage1);
  expect(drink).toHaveLastReturnedWith('La Croix (Lemon)');

  drink(beverage2);
  expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
});
