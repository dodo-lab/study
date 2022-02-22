// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from 'faker';
import type {NextApiRequest, NextApiResponse} from 'next';
import {apiCommonExec} from 'utils/api';
import {assertString} from 'utils/typeGuard';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const delayStr = req.query.delay ?? '0';
  const cursorStr = req.query.cursor ?? '0';
  const countStr = req.query.count ?? '0';
  assertString(delayStr);
  assertString(cursorStr);
  assertString(countStr);

  const delay = Number.parseInt(delayStr);
  const cursor = Number.parseInt(cursorStr);
  const count = Number.parseInt(countStr);

  return new Promise<void>(resolve => {
    setTimeout(() => {
      res.status(200).json(
        [...Array(count)].map((_, index) => ({
          index: cursor + index,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        })),
      );
      resolve();
    }, delay);
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await apiCommonExec(req, res, {get});
}
