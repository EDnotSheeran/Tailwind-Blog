import { NextApiRequest, NextApiResponse } from 'next';

export default async function posts(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      methods.get(req, res);
      break;
    case 'POST':
      methods.get(req, res);
      break;
    case 'PUT':
      methods.get(req, res);
      break;
    case 'DELETE':
      methods.get(req, res);
      break;
    case 'PATCH':
      methods.get(req, res);
      break;
    case 'OPTIONS':
      methods.get(req, res);
      break;
    default:
      res.json({ error: 'Method not allowed.' });
  }
}

const methods = {
  get(req: NextApiRequest, res: NextApiResponse) {},
  post(req: NextApiRequest, res: NextApiResponse) {},
  put(req: NextApiRequest, res: NextApiResponse) {},
  delete(req: NextApiRequest, res: NextApiResponse) {},
  patch(req: NextApiRequest, res: NextApiResponse) {},
  options(req: NextApiRequest, res: NextApiResponse) {},
};
