// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from 'faker';
import type {NextApiRequest, NextApiResponse} from 'next';
import {assertString} from 'utils/typeGuard';

const name = faker;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const delayStr = req.query.delay ?? '0';
  assertString(delayStr);

  const delay = Number.parseInt(delayStr);
  setTimeout(
    () =>
      res.status(200).json({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      }),
    delay,
  );
}
