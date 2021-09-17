import { NextApiRequest, NextApiResponse } from 'next';
import nc, { ErrorHandler } from 'next-connect';

const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  req,
  res,
  next
) => {
  res.status(500).json({ error: err.toString() });
};

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

interface ExtendedRequest {
  user: string;
}
interface ExtendedResponse {
  cookie(name: string, value: string): void;
}

handler
  .use((req, res, next) => {
    if (true) next(Error('Oh no!'));
  })
  .get(async (req, res) => {
    res.json({ msg: 'Hello World' });
  });

handler.post<ExtendedRequest, ExtendedResponse>((req, res) => {
  req.user = 'Anakin';
  res.cookie('sid', '8108');
});

export default handler;
