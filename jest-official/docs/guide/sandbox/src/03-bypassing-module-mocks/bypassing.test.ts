import myFetch from './myFetch';
import { createUser } from './bypassing';

const { Response } = jest.requireActual('./myFetch');

jest.mock('./myFetch');

test('bypassing', async () => {
  const mockFetch = myFetch as jest.MockedFunction<typeof myFetch>;
  mockFetch.mockReturnValue(Promise.resolve(new Response('4')));

  const userId = await createUser();

  expect(mockFetch).toHaveBeenCalledTimes(1);
  expect(mockFetch).toHaveBeenCalledWith('http://website.com/users');
  expect(userId).toBe('4');
});
