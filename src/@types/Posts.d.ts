type Post = {
  title: import('next-mdx-remote').MDXRemoteSerializeResult;
  excerpt: import('next-mdx-remote').MDXRemoteSerializeResult;
  publishedAt: string;
  redirectURL: string;
};

type PostProps = {
  post: {
    title: import('next-mdx-remote').MDXRemoteSerializeResult;
    content: import('next-mdx-remote').MDXRemoteSerializeResult;
    author: {
      name: string;
      avatarURL: string;
      twitter: {
        user: string;
        redirectURL: string;
      };
    };
    previous: {
      title: string;
      redirectURL: string;
    };
    publishedAt: string;
    meta: {
      title: string;
      keywords: string[];
    };
  };
};
