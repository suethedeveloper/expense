import { ReactNode } from 'react';
import classes from './TaskItem.module.css';

const TaskItem = ({children}: {children: ReactNode}) => {
  return <li className={classes.task}>{children}</li>
};

export default TaskItem;