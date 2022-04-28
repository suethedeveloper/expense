import { ReactNode } from 'react';

import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';
import Task from '../../types/Task';

const Tasks = ({items, error, onFetch, loading} : {
    items: Task[];
    error: string;
    onFetch: any;
    loading: boolean;
  }) => {  
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: string | ReactNode = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
