import { parse, serialize, CookieSerializeOptions } from 'cookie';
import { NextHandler } from 'next-connect';
import { createLoginSession, getLoginSession } from './auth';

function parseCookies(req: NextApiRequest) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || '');
}

export default function session({
  name,
  secret,
  cookie: cookieOpts,
}: {
  name: string;
  secret?: string;
  cookie: CookieSerializeOptions;
}) {
  return async (
    req: NextApiRequest,
    res: NextApiResponseCustomEnd,
    next: NextHandler
  ) => {
    if (!secret) throw new Error('TOKEN_SECRET is missing at .env!');
    const cookies = parseCookies(req);
    const token = cookies[name];
    let unsealed = {};

    if (token) {
      try {
        // the cookie needs to be unsealed using the password `secret`
        unsealed = await getLoginSession(token, secret);
      } catch (e) {
        // The cookie is invalid
        console.log(e);
      }
    }

    req.session = unsealed;

    // We are proxying res.end to commit the session cookie
    const oldEnd = res.end;
    console.log(typeof res.end);

    res.end = async function resEndProxy(
      ...args: [
        chunk: any,
        encoding: BufferEncoding,
        cb?: (() => void) | undefined
      ]
    ) {
      if (res.finished || res.writableEnded || res.headersSent) return;
      if (cookieOpts.maxAge) {
        req.session.maxAge = cookieOpts.maxAge;
      }
      const token = await createLoginSession(req.session, secret);

      res.setHeader('Set-Cookie', serialize(name, token, cookieOpts));
      oldEnd.apply(this, args);
    };

    next();
  };
}
