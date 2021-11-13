import axios from 'axios';
import { Users } from './mockModule';

jest.mock('axios');

test('モジュールのモック', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };

  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});
