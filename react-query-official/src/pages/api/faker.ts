// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from 'faker';
import type {NextApiRequest, NextApiResponse} from 'next';

const name = faker;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  });
}
