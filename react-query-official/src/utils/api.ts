import {NextApiRequest, NextApiResponse} from 'next';

type Handler = {
  get?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  post?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  put?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
  delete?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
};

export const apiCommonExec = async (req: NextApiRequest, res: NextApiResponse, handler: Handler) => {
  try {
    if (req.method === 'GET' && handler.get) {
      await handler.get(req, res);
    } else if (req.method === 'POST' && handler.post) {
      await handler.post(req, res);
    } else if (req.method === 'PUT' && handler.put) {
      await handler.put(req, res);
    } else if (req.method === 'DELETE' && handler.delete) {
      await handler.delete(req, res);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log('error', error);
    res.status(500).json({statusCode: 500});
  }
};
