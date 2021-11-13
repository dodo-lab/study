export const fetchResolve = () => {
  return new Promise<string>((resolve) => {
    resolve('http://abehiroshi.la.coocan.jp/');
  });
};

export const fetchReject = () => {
  return new Promise<string>((_, reject) => {
    reject('not found');
  });
};
