import utils from './../jestObjectUtils';

jest.mock('./../jestObjectUtils', () => ({
  __esModule: true,
  default: {
    authorize: () => 'mocked authorize',
    isAuthorized: (secret) => secret === 'mocked',
  },
}));

test('mock', () => {
  expect(utils.authorize()).toMatch('mocked authorize');
  expect(utils.isAuthorized('mocked')).toBeTruthy();
});
