type NextPage<T = {}> = import('next').NextPage<T> & {
  getLayout?: (page: import('react').ReactElement) => import('react').ReactNode;
};

type AppPropsWithLayout = import('next').AppProps & {
  Component: NextPageW;
};

type NextApiRequest = import('next').NextApiRequest &
  import('express').Request & {
    session: {
      users?: User[];
      maxAge?: number;
      createdAt?: number;
    };
    user: User;
  };

type NextApiResponse = import('next').NextApiResponse &
  import('express').Response;

type NextApiResponseCustomEnd = Omit<import('next').NextApiResponse, 'end'> &
  Omit<import('express').Response, 'end'> & {
    end: (
      chunk: any,
      encoding: BufferEncoding,
      cb?: (() => void) | undefined
    ) => Promise<void>;
  };
