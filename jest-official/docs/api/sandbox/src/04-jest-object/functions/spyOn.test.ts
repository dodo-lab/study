const mockedNow = jest.spyOn(Date, 'now');
mockedNow.mockImplementation(() => 55);

test('spyOn', () => {
  expect(Date.now()).toBe(55);
});
