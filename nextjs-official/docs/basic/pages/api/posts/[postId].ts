import {NextApiRequest, NextApiResponse} from 'next';

type Query = {
  postId: string;
};

type Response = {
  content: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Response>) {
  const query = req.query as Query;
  res.status(200).json({content: `post content ${query.postId}`});
}
