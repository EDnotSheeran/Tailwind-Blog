type Post = {
  title: import('next-mdx-remote').MDXRemoteSerializeResult;
  excerpt: import('next-mdx-remote').MDXRemoteSerializeResult;
  publishedAt: string;
  redirectURL: string;
};
