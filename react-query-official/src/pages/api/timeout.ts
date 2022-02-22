// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      res.status(200).json({});
      resolve();
    }, 1000 * 20);
  });
}
