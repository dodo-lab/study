import axios from 'axios';

export class Users {
  name = '';

  static all(): Promise<Users> {
    return axios.get('/users.json').then((resp) => resp.data);
  }
}
