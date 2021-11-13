import defaultExport, { bar, foo } from './mockPartials';

jest.mock('./mockPartials', () => {
  const originalModules = jest.requireActual('./mockPartials');

  return {
    __esModule: true,
    ...originalModules,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('モジュールの一部だけをモック', () => {
  const defaultExportResult = defaultExport();

  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();
  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
