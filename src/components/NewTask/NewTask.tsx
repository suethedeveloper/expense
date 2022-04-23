import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import Task from '../../types/Task';

const NewTask = (props: {onAddTask: (task: Task) => void}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const enterTaskHandler = async (taskText: string) => {
    setIsLoading(true);
    setError('');
    try {
      const url = `https://${process.env.REACT_APP_FIREBASE_KEY}.firebaseio.com/tasks.json`;
      const response = await fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask: Task = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong!');
      }
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
