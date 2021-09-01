import React from 'react';
import { AppProps } from 'next/app';
import '@styles/tailwind.css';
import Layout from '@components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;