import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@components';
import { longDate } from '@utils/Date';

const PostPage: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title} - EDnotSheeran</title>
      </Head>
      <Container>
        <main>
          <article className="xl:divide-y xl:divide-gray-200">
            <header className="pt-6 xl:pb-10">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {longDate(post.publishedAt)}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
                    <MDXRemote {...post.title} />
                  </h1>
                </div>
              </div>
            </header>
            <div
              className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-6 pb-16 xl:pb-20"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2">
                      <img
                        src={post.author.avatarURL}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <dl className="text-sm font-medium whitespace-no-wrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900">{post.author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          <a
                            href={post.author.twitter.redirectURL}
                            className="text-teal-600 hover:text-teal-700"
                          >
                            {post.author.twitter.user}
                          </a>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                <div className="max-w-none pt-10 pb-8">
                  <div className="prose max-w-none">
                    <MDXRemote {...post.content} />
                  </div>
                </div>
                <div className="pt-6 pb-16">
                  <p>
                    Want to check it out?
                    <a
                      href="https://tailwindui.com"
                      className="font-medium text-teal-600 hover:text-teal-700"
                    >
                      {' '}
                      Visit the Tailwind UI website →
                    </a>
                  </p>
                </div>
              </div>
              <footer className="text-sm font-medium divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
                <div className="space-y-8 py-8">
                  <div>
                    <h2 className="text-xs leading-5 tracking-wide uppercase text-gray-500">
                      Previous Article
                    </h2>
                    <div className="text-teal-600 hover:text-teal-700">
                      <Link href={post.previous.redirectURL}>
                        <a>{post.previous.title}</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <Link href="/">
                    <a className="text-teal-600 hover:text-teal-700">
                      ← Back to the blog
                    </a>
                  </Link>
                </div>
              </footer>
            </div>
          </article>
        </main>
      </Container>
    </>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<PostProps>> => {
  const title = 'Introducing Tailwind UI&nbsp;Ecommerce';
  const mdxTitle = await serialize(title);
  const content = `Some **mdx** text, with a component
  - dasdas
  - dasdasd`;
  const mdxContenta = await serialize(content);
  return {
    props: {
      post: {
        title: mdxTitle,
        content: mdxContenta,
        author: {
          name: 'EDnotSheeran',
          avatarURL:
            'https://avatars.githubusercontent.com/u/55529750?s=60&v=4',
          twitter: {
            user: '@ednotsheeran',
            redirectURL: 'https://twitter.com/ednotsheeran',
          },
        },
        previous: {
          title: 'Como Fazer fumaca com a mao',
          redirectURL: 'https://blog.tailwindcss.com/headless-ui-v1-4',
        },
        publishedAt: '2021-08-11T19:30:00.000Z',
        meta: {
          title: 'Introducing Tailwind UI Ecommerce',
          keywords: [''],
        },
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
    fallback: false,
  };
};
