import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User, { UserInfo } from './User';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
  container = null;
});

it('renders user data', async () => {
  const fakeUser: UserInfo = {
    name: 'Joni Baez',
    age: 32,
    address: '123, Charming Avenue',
  };

  // TODO: global.fetchを直接書き換えない手段がないか？
  // var globalRef:any =global;
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container?.querySelector('summary')?.textContent).toBe(fakeUser.name);
  expect(container?.querySelector('strong')?.textContent).toBe(
    fakeUser.age.toString()
  );
  expect(container?.textContent).toContain(fakeUser.address);

  // TODO: global.fetchを元に戻す処理が必要？
  // remove the mock to ensure tests are completely isolated
  // global.fetch.mockRestore();
});
