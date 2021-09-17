import React from 'react';
import { Header, Navbar } from '@components';
import { NextPage } from 'next';

const Layout: NextPage & {
  Login: NextPage;
} = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;

const Login: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

Layout.Login = Login;
