import React, { ReactElement } from 'react';
import '@styles/tailwind.css';
import { Layout } from '@components';

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
