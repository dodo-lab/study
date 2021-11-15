/**
 * .toHaveProperty(keyPath, value?) は、オブジェクトに指定された参照(keyPath)と値(value：オプショナル)が存在するか検証する。
 */

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    'nice.oven': true,
  },
  'ceiling.height': 2,
};

test('toHaveProperty', () => {
  expect(houseForSale).toHaveProperty('bath');
  expect(houseForSale).toHaveProperty('bedrooms', 4);
  expect(houseForSale).not.toHaveProperty('pool');

  // ネストしたプロパティをチェック
  expect(houseForSale).toHaveProperty('kitchen.area', 20);
  expect(houseForSale).toHaveProperty('kitchen.amenities', [
    'oven',
    'stove',
    'washer',
  ]);
  expect(houseForSale).not.toHaveProperty('kitchen.open');

  // 配列指定でネストしたプロパティをチェック
  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
  expect(houseForSale).toHaveProperty(
    ['kitchen', 'amenities'],
    ['oven', 'stove', 'washer']
  );
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

  // キー自体が文字列の場合
  expect(houseForSale).toHaveProperty(['ceiling.height'], 2);
});
