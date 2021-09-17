type SessionProps = {
  name: string;
  secret?: string;
  cookie: import('cookie').CookieSerializeOptions;
};

type User = {
  id: string;
  username: string;
  name: string;
  hash: string;
  salt: string;
  createdAt: number;
};

type UserFields = {
  username: string;
  password: string;
  name: string;
};
