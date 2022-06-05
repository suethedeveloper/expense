import { Fragment, ReactChild } from 'react';

import MainNavigation from './MainNavigation';

const Layout = ({children}: {children: ReactChild}) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
