import {NextApiRequest, NextApiResponse} from 'next';

type Response = {
  ids: string[];
};

const ids = ['123', '456', '7890'];

export default function (req: NextApiRequest, res: NextApiResponse<Response>) {
  res.status(200).json({ids});
}
