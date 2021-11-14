/**
 * 日付などの動的な情報がスナップショットに含まれると、毎回差分を検知されてしまう
 * 任意のマッチャーをjestに渡すことで、jestは受け取った情報をスナップショットに保存する
 */

test('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBorn James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});
