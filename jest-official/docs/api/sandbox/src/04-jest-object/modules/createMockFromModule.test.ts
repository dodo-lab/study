import jestObjectUtil from './../jestObjectUtils';

const utils = jest.createMockFromModule<typeof jestObjectUtil>(
  './../jestObjectUtils'
);
utils.isAuthorized = jest.fn((secret) => secret === 'not wizard');

test('createMockFromModule', () => {
  expect(utils.isAuthorized('wizard')).toBeFalsy();
});
