import myFetch from './myFetch';

export const createUser = async () => {
  const response = await myFetch('http://website.com/users');
  const userId = await response.text();
  return userId;
};
