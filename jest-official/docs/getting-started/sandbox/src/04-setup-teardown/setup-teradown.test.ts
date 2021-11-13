beforeAll(() => console.log('global - beforeAll'));
beforeEach(() => console.log('global - beforeEach'));
afterAll(() => console.log('global afterAll'));
afterEach(() => console.log('global afterEach'));

test('global-test1', () => console.log('global-test1'));
test('global-test2', () => console.log('global-test2'));

describe('describe', () => {
  beforeAll(() => console.log('describe - beforeAll'));
  beforeEach(() => console.log('describe - beforeEach'));
  afterAll(() => console.log('describe afterAll'));
  afterEach(() => console.log('describe afterEach'));

  test('describe-test1', () => console.log('describe-test1'));
  test('describe-test2', () => console.log('describe-test2'));
});
