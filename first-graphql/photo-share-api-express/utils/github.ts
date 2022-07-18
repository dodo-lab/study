import fetch from 'node-fetch';

type Credentials = {
  client_id: string;
  client_secret: string;
  code: string;
};

const toJSON = (res: any) => res.json();

const throwError = (error: any) => {
  throw new Error(JSON.stringify(error));
};

export const requestGithubToken = (credentials: Credentials) =>
  fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(toJSON)
    .catch(throwError);

export const requestGithubUserAccount = (token: string) =>
  fetch(`https://api.github.com/user`, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then(toJSON)
    .catch(throwError);

export const authorizeWithGithub = async (credentials: Credentials) => {
  const token = await requestGithubToken(credentials);
  const { access_token } = token;
  const githubUser = await requestGithubUserAccount(access_token);
  return { ...githubUser, access_token };
};
