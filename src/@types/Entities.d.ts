type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type User =
  | Omit<import('@prisma/client').User, 'hash' | 'salt' | 'deleted'> & {
      hash?: string;
      salt?: string;
      deleted?: boolean;
    };

type Post = {
  title: import('next-mdx-remote').MDXRemoteSerializeResult;
  excerpt: import('next-mdx-remote').MDXRemoteSerializeResult;
  publishedAt: string;
  redirectURL: string;
};
