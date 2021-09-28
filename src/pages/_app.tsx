import React, { ReactElement } from 'react';
import '@styles/tailwind.css';
import { Layout } from '@components';
import { GetServerSideProps } from 'next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
