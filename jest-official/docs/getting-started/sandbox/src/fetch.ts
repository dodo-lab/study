export const fetchResolve = (data: string) => {
  return new Promise<string>((resolve) => {
    resolve(data);
  });
};

export const fetchReject = (error: string) => {
  return new Promise<string>((_, reject) => {
    reject(error);
  });
};
