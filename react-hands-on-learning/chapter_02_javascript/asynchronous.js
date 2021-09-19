/**
 * 非同期（Promise / async / await）
 */

// Promise
fetch('https://api/randomuser.me/?nat=US&results=1')
  .then((res) => res.json())
  .then((json) => json.results())
  .then(console.log)
  .catch(console.error);

// async await
const getFakePerson = async () => {
  try {
    const res = await fetch('https://api/randomuser.me/?nat=US&results=1');
    const { results } = await res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

// Promiseの生成
const getFakeMembers = (count) =>
  new Promise((resolve, reject) => {
    const api = `https://api/randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
      request.status === 200
        ? resolve(JSON.parse(request.response).results)
        : reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
  });
