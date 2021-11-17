import utils from './../jestObjectUtils';

jest.mock('./../jestObjectUtils', () => {
  const originalUtils = jest.requireActual('./../jestObjectUtils');

  return {
    __esModule: true,
    ...originalUtils,
    default: {
      ...originalUtils.default, // ★defaultもスプレッド構文で渡しておかないと、isAuthorizedメソッドが存在しない状態で上書きされてしまう
      authorize: () => 'mocked authorize',
    },
  };
});

test('requireActual', () => {
  expect(utils.authorize()).toMatch('mocked authorize');
  expect(utils.isAuthorized('wizard')).toBeTruthy();
});
