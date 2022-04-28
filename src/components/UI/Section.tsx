import { ReactNode } from 'react';
import classes from './Section.module.css';

const Section = ({children}: {children: ReactNode}) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
