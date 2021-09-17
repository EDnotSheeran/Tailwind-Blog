import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { Container } from '@components';
import { shortDate } from '@utils/Date';

const HomePage: NextPage<HomeProps> = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>Blog - EDnotSheeran</title>
      </Head>
      <Container>
        <main>
          <div className="divide-y divide-gray-200">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]">
                Latest
              </h1>
              <p className="text-lg text-gray-500">
                All the latest Tailwind CSS news, straight from the team.
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.map((post, i) => (
                <li key={i} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium text-gray-500">
                        <time dateTime={post.publishedAt}>
                          {shortDate(post.publishedAt)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">
                          <Link href={post.redirectURL}>
                            <a className="text-gray-900">
                              <MDXRemote {...post.title} />
                            </a>
                          </Link>
                        </h2>
                        <div className="prose max-w-none text-gray-500">
                          <div className="prose max-w-none">
                            <MDXRemote {...post.excerpt} />
                          </div>
                        </div>
                      </div>
                      <div className="text-base font-medium">
                        <Link href={post.redirectURL}>
                          <a
                            className="text-teal-600 hover:text-teal-700"
                            aria-label='Read "Introducing Tailwind UI Ecommerce"'
                          >
                            Read more →
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </Container>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<HomeProps>> => {
  const title = 'Introducing Tailwind UI&nbsp;Ecommerce';
  const mdxTitle = await serialize(title);
  const excerpt = 'Some **mdx** text, with a component';
  const mdxExcerpt = await serialize(excerpt);

  return {
    props: {
      posts: [
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
        {
          title: mdxTitle,
          excerpt: mdxExcerpt,
          publishedAt: '2021-08-11T19:30:00.000Z',
          redirectURL: '/1',
        },
      ],
    },
  };
};
