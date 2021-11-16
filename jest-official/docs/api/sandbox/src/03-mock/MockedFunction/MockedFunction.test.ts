import add from './add';
import calc from './calc';

jest.mock('./add');

const mockedAdd = add as jest.MockedFunction<typeof add>;

test('MockedFunction', () => {
  mockedAdd.mockImplementation((a, b) => a * b);

  expect(calc('Add', 1, 2)).toBe(2);
  expect(calc('Add', 10, 10)).toBe(100);

  expect(mockedAdd).toBeCalledTimes(2);
  expect(mockedAdd).toHaveBeenNthCalledWith(1, 1, 2);
  expect(mockedAdd).toHaveBeenNthCalledWith(2, 10, 10);
});
