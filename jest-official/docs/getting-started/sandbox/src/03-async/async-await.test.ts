import { fetchResolve, fetchReject } from '../fetch';

describe('Async / Await', () => {
  const resolveData = 'success';
  const rejectData = 'error';

  test('resolve', async () => {
    const data = await fetchResolve(resolveData);
    expect(data).toBe(resolveData);
  });

  test('reject', async () => {
    expect.assertions(1);

    try {
      await fetchReject(rejectData);
    } catch (e) {
      expect(e).toMatch(rejectData);
    }
  });
});
