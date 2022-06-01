import { Fragment, ReactNode } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;