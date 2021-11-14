describe.only('describe.only', () => {
  test('test1', () => {
    expect(1 + 1).toBe(2);
  });

  test('test2', () => {
    expect(1 + 1).toBe(2);
  });
});

// describe.onlyが存在する場合、他のdescribeはスキップされる
describe('describe', () => {
  test('test3', () => {
    expect(1 + 1).toBe(2);
  });
});
