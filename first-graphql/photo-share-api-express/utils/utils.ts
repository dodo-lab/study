export const toJSON = (res: any) => res.json();

export const throwError = (error: any) => {
  throw new Error(JSON.stringify(error));
};
