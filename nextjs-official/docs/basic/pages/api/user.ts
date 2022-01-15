import {NextApiRequest, NextApiResponse} from 'next';

type Response = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Response>) {
  res.status(200).json({name: 'John Doe'});
}
