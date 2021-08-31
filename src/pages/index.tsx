import React from 'react';
import Layout from '@components/Layout';
import Container from '@components/Container';

const Home: React.FC = () => {
  return (
    <Layout>
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
              {/* Article */}
              <li className="py-12">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium text-gray-500">
                      <time dateTime="2021-08-11T19:30:00.000Z">
                        August 11, 2021
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold tracking-tight">
                        <a
                          className="text-gray-900"
                          href="/tailwind-ui-ecommerce"
                        >
                          Introducing Tailwind UI Ecommerce
                        </a>
                      </h2>
                      <div className="prose max-w-none text-gray-500">
                        <div className="prose max-w-none">
                          <p>
                            Almost 6 months in the making, we finally released{' '}
                            <a href="https://tailwindui.com/#product-ecommerce">
                              Tailwind UI Ecommerce
                            </a>{' '}
                            — the first all-new component kit for Tailwind UI
                            since the initial launch back in February 2020.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-base font-medium">
                      <a
                        className="text-teal-600 hover:text-teal-700"
                        aria-label='Read "Introducing Tailwind UI Ecommerce"'
                        href="/tailwind-ui-ecommerce"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </article>
                {/* Article */}
              </li>
            </ul>
          </div>
        </main>
      </Container>
    </Layout>
  );
};

export default Home;
