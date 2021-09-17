import nextConnect from 'next-connect';
import { NextApiResponse } from 'next';
import auth from '@middlewares/auth';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(auth).get((req, res) => {
  res.status(200).send('dasd');
});

export default handler;
